"""Mesure le mouvement global de la vidéo (panoramique sur pied) image par image
par corrélation de phase, et écrit la trajectoire cumulée en pixels (largeur 1920).
    python tools/track_pan.py tools/raw/room_pan.mp4 public/video/room-track.json
"""
import json, sys
import cv2, numpy as np
src, out = sys.argv[1], sys.argv[2]
cap = cv2.VideoCapture(src)
fps = cap.get(cv2.CAP_PROP_FPS); width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
win = None; prev = None; cx = cy = 0.0; track = [[0.0, 0.0]]; resp = []
while True:
    ok, frame = cap.read()
    if not ok: break
    g = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY).astype(np.float32)
    g = cv2.resize(g, (width // 2, frame.shape[0] // 2))
    if win is None: win = cv2.createHanningWindow((g.shape[1], g.shape[0]), cv2.CV_32F)
    if prev is not None:
        (dx, dy), r = cv2.phaseCorrelate(prev, g, win)
        cx += dx * 2; cy += dy * 2; resp.append(round(r, 3))
        track.append([round(cx * 1920 / width, 2), round(cy * 1920 / width, 2)])
    prev = g
json.dump({'fps': fps, 'frames': len(track), 'track': track}, open(out, 'w'))
print('images', len(track), 'dérive totale px (1920)', track[-1], 'fps', fps, 'réponse min/moy', min(resp), round(sum(resp) / len(resp), 3))
print('échantillons', [track[i] for i in range(0, len(track), 24)])
