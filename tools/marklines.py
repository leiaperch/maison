# Trace et numérote les longues droites quasi horizontales d'une image, pour
# choisir à l'œil la plinthe et la corniche d'un même mur (droites parallèles).
import sys, cv2, numpy as np
p, minlen = sys.argv[1], float(sys.argv[2] if len(sys.argv) > 2 else 120)
img = cv2.imread(p); H, W = img.shape[:2]
seg = cv2.createLineSegmentDetector(cv2.LSD_REFINE_ADV).detect(cv2.GaussianBlur(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY), (3,3), 0))[0].reshape(-1,4)
rows=[]
for a,b,c,d in seg:
    if c<a: a,b,c,d=c,d,a,b
    L=np.hypot(c-a,d-b)
    if L<minlen: continue
    s=(d-b)/(c-a+1e-9)
    if abs(s)>0.7: continue
    rows.append((L,a,b,c,d,s))
rows.sort(reverse=True); rows=rows[:20]
out=img.copy()
for k,(L,a,b,c,d,s) in enumerate(rows):
    cv2.line(out,(int(a),int(b)),(int(c),int(d)),(0,0,255),2)
    cv2.putText(out,str(k),(int((a+c)/2),int((b+d)/2)-6),cv2.FONT_HERSHEY_SIMPLEX,0.7,(0,255,255),2)
    print(f"{k:2d}  L={L:6.1f}  ({a:7.1f},{b:6.1f})->({c:7.1f},{d:6.1f})  pente {s:+.4f}")
cv2.imwrite(sys.argv[3] if len(sys.argv)>3 else 'tools/marked.jpg', out)
