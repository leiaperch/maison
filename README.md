# Maison

Gabarit de landing « marque d'objets », à revendre. Une maison filmée pièce par
pièce en panoramique, que le scroll traverse et que des objets réels — des scans
photogrammétriques — viennent peupler dans la vraie perspective de chaque vidéo,
avec ombres au sol. Clic sur un objet : la caméra s'en approche, un panneau
permet de choisir ses matières, on le déplace au sol et on le tourne à la souris.
Entre deux pièces, un plan de couloir qui finit sur une porte.

```
npm install
python tools/fetch_assets.py   # scans Poly Haven (CC0) + HDRI, non versionnés
npm run dev                    # http://localhost:5188
npm run build
```

**`HANDOFF.md` est le vrai document** : chaîne vidéo, méthode de calage de la
caméra sur chaque clip, placement des objets, transitions, choix des modèles, et
la liste des pièges déjà rencontrés. À lire avant de toucher au calage ou d'ajouter
une pièce.

Un client = un autre `src/content.js`.

## Ce qui n'est pas dans le dépôt

- `public/models/` et `public/hdri/` — assets CC0 Poly Haven, retéléchargés à
  l'identique par `tools/fetch_assets.py`. Le dictionnaire `MODELS` du script est
  le manifeste.
- `node_modules/`, `dist/`, et les captures de travail sous `tools/`.

Les rushes Kling (`tools/raw/`) sont versionnés : ils ne sont pas reproductibles.
