# Calage d'une pièce à partir de son sol : le parquet (ou le carrelage) porte deux
# familles de droites perpendiculaires. Chaque famille donne un point de fuite ;
# les deux points de fuite donnent l'horizon, et leur orthogonalité la focale.
#   python tools/fitcam.py <image> <x0> <y0> <x1> <y1>
import sys, cv2, numpy as np
rng = np.random.default_rng(7)

path = sys.argv[1]
x0, y0, x1, y1 = (int(v) for v in sys.argv[2:6])
img = cv2.imread(path); H, W = img.shape[:2]
g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
seg = cv2.createLineSegmentDetector(cv2.LSD_REFINE_ADV).detect(cv2.GaussianBlur(g, (3, 3), 0))[0].reshape(-1, 4)

S = []
for a, b, c, d in seg:
    L = np.hypot(c - a, d - b)
    if L < 22: continue
    if not (x0 <= a <= x1 and x0 <= c <= x1 and y0 <= b <= y1 and y0 <= d <= y1): continue
    S.append((a, b, c, d, L))
S = np.array(S)
mid = np.stack([(S[:, 0] + S[:, 2]) / 2, (S[:, 1] + S[:, 3]) / 2], 1)
dirs = np.stack([S[:, 2] - S[:, 0], S[:, 3] - S[:, 1]], 1)
dirs /= np.linalg.norm(dirs, axis=1, keepdims=True)

def inliers(p, mask, tol=0.012):
    v = p - mid; v /= (np.linalg.norm(v, axis=1, keepdims=True) + 1e-9)
    err = np.abs(v[:, 0] * dirs[:, 1] - v[:, 1] * dirs[:, 0])   # sinus de l'écart angulaire
    return mask & (err < tol)

def ransac(mask, iters=4000):
    idx = np.flatnonzero(mask); best = (0, None, None)
    if len(idx) < 6: return best
    for _ in range(iters):
        i, j = rng.choice(idx, 2, replace=False)
        d1, d2 = dirs[i], dirs[j]
        den = d1[0] * d2[1] - d1[1] * d2[0]
        if abs(den) < 0.08: continue
        t = ((mid[j, 0] - mid[i, 0]) * d2[1] - (mid[j, 1] - mid[i, 1]) * d2[0]) / den
        p = mid[i] + t * d1
        if np.linalg.norm(p - [W / 2, H / 2]) > 60 * W: continue
        m = inliers(p, mask); sc = S[m, 4].sum()
        if sc > best[0]: best = (sc, p, m)
    return best

def refine(m):
    A, r, w = [], [], []
    for (a, b, c, d, L) in S[m]:
        nx, ny = -(d - b), (c - a); n = np.hypot(nx, ny)
        A.append([nx / n, ny / n]); r.append((nx * a + ny * b) / n); w.append(L)
    A = np.array(A) * np.array(w)[:, None]; r = np.array(r) * np.array(w)
    return np.linalg.lstsq(A, r, rcond=None)[0]

mask = np.ones(len(S), bool)
s1, p1, m1 = ransac(mask)
p1 = refine(m1); m1 = inliers(p1, mask)
s2, p2, m2 = ransac(mask & ~m1)
p2 = refine(m2); m2 = inliers(p2, mask & ~m1)

print(f"{path}  {W}x{H}   segments {len(S)}   familles {m1.sum()} / {m2.sum()}")
print(f"  VP1 = ({p1[0]:9.1f}, {p1[1]:8.1f})   VP2 = ({p2[0]:9.1f}, {p2[1]:8.1f})")
cx, cy = W / 2, H / 2
m = (p2[1] - p1[1]) / (p2[0] - p1[0]); yh = p1[1] + m * (cx - p1[0])
dot = (p1[0] - cx) * (p2[0] - cx) + (p1[1] - cy) * (p2[1] - cy)
f = np.sqrt(-dot) if dot < 0 else float('nan')
print(f"  horizon y={yh:8.1f} (centre {cy:.0f})   roll={np.degrees(np.arctan(m)):+.2f}°")
print(f"  focale={f:8.1f} px  ->  fov_h={np.degrees(2*np.arctan(W/2/f)):5.1f}°   pitch={np.degrees(np.arctan((yh-cy)/f)):+6.2f}°")
print(f"  pitch si fov=76°: {np.degrees(np.arctan((yh-cy)/(W/2/np.tan(np.radians(38))))):+6.2f}°")
