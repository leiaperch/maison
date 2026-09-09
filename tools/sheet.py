import json, cv2, numpy as np, sys
names = json.load(open('tools/sweep.json'))
cols = int(sys.argv[1]) if len(sys.argv) > 1 else 3
tiles = []
for f, lab in names:
    im = cv2.imread(f); im = cv2.resize(im, (720, 405))
    cv2.rectangle(im, (0, 0), (200, 24), (0, 0, 0), -1)
    cv2.putText(im, lab, (6, 17), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (0, 255, 255), 1)
    tiles.append(im)
rows = [np.hstack(tiles[i:i+cols]) for i in range(0, len(tiles), cols)]
w = max(r.shape[1] for r in rows)
rows = [np.pad(r, ((0,0),(0,w-r.shape[1]),(0,0))) for r in rows]
cv2.imwrite('tools/sheet.jpg', np.vstack(rows))
print('tools/sheet.jpg')
