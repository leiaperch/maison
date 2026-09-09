# Estime la ligne d'horizon d'une image de pièce : les droites du plan horizontal
# (plinthe, corniche, appui, plan de travail, joints) se coupent sur l'horizon.
import sys, cv2, numpy as np

def lines_of(img):
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    g = cv2.GaussianBlur(g, (3, 3), 0)
    lsd = cv2.createLineSegmentDetector(cv2.LSD_REFINE_ADV)
    seg = lsd.detect(g)[0]
    if seg is None: return []
    out = []
    for s in seg.reshape(-1, 4):
        x1, y1, x2, y2 = s
        L = np.hypot(x2 - x1, y2 - y1)
        if L < img.shape[1] * 0.05: continue
        dx, dy = x2 - x1, y2 - y1
        if abs(dy) > abs(dx) * 0.8: continue          # verticales : VP au zénith
        if abs(dy) < abs(dx) * 0.004: continue        # parfaitement horizontales : VP à l'infini
        out.append((x1, y1, x2, y2, L))
    return out

def horizon(img):
    segs = lines_of(img)
    h, w = img.shape[:2]
    ys, ws = [], []
    for i in range(len(segs)):
        for j in range(i + 1, len(segs)):
            a, b = segs[i], segs[j]
            x1, y1, x2, y2, L1 = a; x3, y3, x4, y4, L2 = b
            d1x, d1y = x2 - x1, y2 - y1; d2x, d2y = x4 - x3, y4 - y3
            den = d1x * d2y - d1y * d2x
            if abs(den) < 1e-6: continue
            t = ((x3 - x1) * d2y - (y3 - y1) * d2x) / den
            px, py = x1 + t * d1x, y1 + t * d1y
            if abs(px - w / 2) < w * 0.6: continue     # intersections proches = bruit de coin
            if abs(px - w / 2) > w * 40: continue
            if not (-h < py < 2 * h): continue
            ys.append(py); ws.append(min(L1, L2))
    if not ys: return None, 0
    ys = np.array(ys); ws = np.array(ws, float)
    # mode pondéré, fenêtre glissante de 6 px
    grid = np.arange(-h * 0.5, h * 1.5, 1.0)
    score = np.array([ws[np.abs(ys - y) < 6].sum() for y in grid])
    k = int(np.argmax(score))
    sel = np.abs(ys - grid[k]) < 12
    return float(np.average(ys[sel], weights=ws[sel])), int(sel.sum())

for p in sys.argv[1:]:
    img = cv2.imread(p)
    y, n = horizon(img)
    h, w = img.shape[:2]
    print(f"{p}  {w}x{h}  horizon_y={y:.1f}  (centre {h/2:.0f}, ecart {y-h/2:+.1f} px, {n} intersections)")
