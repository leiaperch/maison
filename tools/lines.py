# Segments longs d'une image, filtrés par région et par pente : sert à relever
# plinthe, corniche, plan de travail pour en déduire le point de fuite.
import sys, cv2, numpy as np
p = sys.argv[1]; minlen = float(sys.argv[2]) if len(sys.argv) > 2 else 120
img = cv2.imread(p); g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
seg = cv2.createLineSegmentDetector(cv2.LSD_REFINE_ADV).detect(cv2.GaussianBlur(g,(3,3),0))[0]
rows = []
for x1,y1,x2,y2 in seg.reshape(-1,4):
    if x2 < x1: x1,y1,x2,y2 = x2,y2,x1,y1
    L = np.hypot(x2-x1, y2-y1)
    if L < minlen: continue
    s = (y2-y1)/(x2-x1+1e-9)
    if abs(s) > 0.6: continue
    rows.append((L, x1, y1, x2, y2, s))
rows.sort(reverse=True)
print(f"{p}  {img.shape[1]}x{img.shape[0]}")
for L,x1,y1,x2,y2,s in rows[:28]:
    print(f"  L={L:6.1f}  ({x1:7.1f},{y1:6.1f}) -> ({x2:7.1f},{y2:6.1f})  pente {s:+.4f}")
