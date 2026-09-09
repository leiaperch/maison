#!/usr/bin/env bash
# Boucles de fond sans raccord visible : la fin du clip est fondue dans son
# début (0,6 s), le clip démarre à 0,6 s. Lancer depuis la racine.
set -e
for n in hero atelier; do
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 tools/raw/$n.mp4)
  cut=$(python3 -c "print(round($d-0.6,3))")
  ffmpeg -y -loglevel error -i tools/raw/$n.mp4 -filter_complex \
    "[0:v]trim=0.6:$cut,setpts=PTS-STARTPTS[a];[0:v]trim=$cut,setpts=PTS-STARTPTS[t];[0:v]trim=0:0.6,setpts=PTS-STARTPTS[h];[t][h]blend=all_expr='A*(1-min(T/0.6,1))+B*min(T/0.6,1)'[x];[a][x]concat=n=2:v=1,format=yuv420p" \
    -an -c:v libx264 -preset slow -crf 21 -movflags +faststart public/video/$n.mp4
  ffmpeg -y -loglevel error -i public/video/$n.mp4 -vf scale=1280:-2 -an -c:v libx264 -preset slow -crf 24 -movflags +faststart public/video/$n.720.mp4
  ffmpeg -y -loglevel error -i public/video/$n.mp4 -frames:v 1 -q:v 3 public/images/$n.jpg
done
ls -la public/video public/images
