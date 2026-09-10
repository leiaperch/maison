# HANDOFF — Maison

*7 septembre 2026, revu le 8 : calage par pièce et choix des modèles*

## Ce que c'est

Un gabarit de landing « marque d'objets » à revendre : une maison vide filmée pièce par pièce en panoramique (vidéo Kling), que le scroll traverse et que les objets réels (scans photogrammétriques) viennent peupler dans la vraie perspective de chaque vidéo, avec ombres au sol. Clic sur un objet : la caméra s'en approche, un panneau permet de choisir ses matières, on le déplace sur le sol et on le tourne à la souris. Cinq pièces (salon, cuisine, chambre, salle de bain, terrasse), un plan de couloir entre chacune, puis le contact.

## Lancer

```
npm install
npm run dev              # http://localhost:5188
npm run build
node tools/errs.mjs      # charge la page et liste les erreurs
node tools/interact.mjs  # sélection, teintes, déplacement, rotation → tools/i_*.jpg
node tools/cal2.mjs 1 "fov=76&height=1.25&pitch=-1.5&yaw=4"   # mire de calage d'une pièce -> tools/cal_1.jpg
node tools/sweep.mjs 2 "-4,0,4" "1.1,1.5" && python tools/sheet.py 3   # planche contact de calages
node tools/shot.mjs 1 0.3,0.62,0.88   # la pièce avec ses objets -> tools/s_1_*.jpg
python tools/marklines.py tools/kitchen_f0.jpg 150 tools/m.jpg   # droites longues numérotées
node tools/capture.mjs   # film de la visite → tools/maison_scroll.webm
```

## La chaîne vidéo + tracking (par pièce)

1. Clip Kling v3 Pro (Artlist, 500 crédits / 5 s) : panoramique lent sur pied, rotation pure, pièce vide, 28 mm, lumière du soir. Originaux dans `tools/raw/`.
2. `python tools/track_pan.py tools/raw/<clip>.mp4 public/video/<clip>-track.json` mesure le mouvement image par image (corrélation de phase OpenCV) et écrit la dérive cumulée en pixels (largeur 1920). Réponse > 0,8 = pan propre.
3. Encodage scrub : `-g 8 -bf 0` (1080p) et `-g 4` (720p mobile) ; poster = première image.
4. Les clips s'enchaînent dans une seule chaîne de scrub (`src/scrub.js`, copié d'Horizon) ; la progression du scroll donne la pièce et la progression locale d'après les durées réelles.

## Calage de la caméra (à refaire pour tout nouveau clip)

`camera` de chaque pièce dans `content.js` : `fov` (horizontal), `height`, `pitch`, `yaw`, `roll`.
**Chaque pièce a son propre calage.** Les quatre partageaient celui du salon : c'est ce qui
faisait flotter les objets dans la cuisine, la chambre et la salle de bain. Valeurs actuelles :

| pièce | fov | height | pitch | yaw |
|---|---|---|---|---|
| salon | 76 | 1,40 | +2,2 | 16 |
| cuisine | 76 | 1,25 | −1,5 | 4 |
| chambre | 76 | 1,35 | −3,0 | 6 |
| salle de bain | 76 | 1,20 | −2,5 | 2 |
| terrasse | 62 | 0,80 | −4,5 | 0 |

Convention de signe, vérifiée sur le salon : **`horizon_écran = centre + f·tan(pitch)`**, `f = 960 / tan(fov/2)`
en coordonnées vidéo (1920 de large). Pitch positif = horizon *sous* le centre = caméra qui vise
vers le haut. La doc précédente avait le signe inverse.

Deux méthodes, dans cet ordre :

1. **Deux droites horizontales perpendiculaires** (plinthe d'un mur + plinthe du mur d'à côté).
   Leurs points de fuite sont sur l'horizon et sont orthogonaux : `(v1−c)·(v2−c) = −f²` donne une
   équation du second degré en `y_horizon`. Des deux racines, garder celle qui est **au‑dessus**
   de tout le sol visible ; l'autre est toujours l'artefact. `tools/marklines.py <img>` trace et
   numérote les longues droites pour choisir la bonne paire. Contrôle : sur `room_f0.png` cette
   méthode redonne 590 px, le calage du salon en donne 587.
2. **Un même objet horizontal relevé à deux abscisses** (plan de travail, frise de carrelage) :
   avec `Δ = y_sol − y_objet` mesuré en deux points, `hor = (Δb·sol_a − Δa·sol_b) / (Δb − Δa)` et
   `H = h_objet · (sol_a − hor) / Δa`. Cette seconde méthode donne la **hauteur de caméra en
   mètres** sans passer par la focale. C'est elle qui a calé la cuisine sur son plan de travail
   à 0,90 m — et le contrôle est direct : la planche à découper, posée à `y = 0.9`, tombe pile
   sur le marbre de la vidéo.

Ce qui ne marche pas, et qu'il ne faut pas réessayer : ajuster à l'œil sur une grille au sol
(le bord lointain de la grille n'est pas l'horizon, on se trompe de plusieurs degrés), et
détecter les points de fuite automatiquement sur le parquet en chevrons (les deux familles de
lames sont trop proches en angle, le RANSAC retrouve deux fois la même).

**La mire `?calib&room=N`** (voir `scene.js`) affiche désormais : une grille d'un mètre, quatre
cubes d'un mètre posés au sol, et surtout **la ligne d'horizon** — un segment tracé à `y = 0`
très loin, donc toujours exactement sur l'horizon. `node tools/cal2.mjs <room> "fov=…&height=…&pitch=…&yaw=…"`
capture une pièce précise, `node tools/sweep.mjs <room> "<pitchs>" "<hauteurs>"` puis
`python tools/sheet.py` sortent une planche contact de plusieurs calages.

Le « travelling » au clic est numérique (zoom + recadrage appliqués à la vidéo et à la caméra 3D via `setViewOffset`), donc l'alignement reste exact.

## La terrasse

Seul plan tourné dehors, et seul plan où le calage automatique (`tools/fitcam.py`) soit **bien
conditionné** : les grandes dalles donnent deux familles de droites perpendiculaires nettes, les
deux points de fuite tombent de part et d'autre du cadre et le roulis sort à 0,4°. Résultat
direct : `fov 62`, `pitch −4,5`. La hauteur (0,80 m — caméra basse) vient du plan de travail du
barbecue, à 0,90 m.

Deux choses à savoir si on regénère ce plan :

- **Kling y panotait dans l'autre sens** que les quatre pièces (dérive `+498` au lieu de `−356`
  à `−857`), et ce sens-là découvrait la piscine au lieu de la dalle : les objets tardifs
  finissaient dans l'eau. Le clip est monté à l'envers (`ffmpeg -vf reverse`) — un panoramique
  sur pied se retourne sans que ça se voie. Vérifier le **signe de la dérive** de tout nouveau
  clip contre les autres : c'est lui qui décide si `pos.x` croissant suit ou remonte le
  panoramique.
- Le champ est plus serré dehors que dedans (62° contre 76°). Ne pas recopier le calage.

## Placement des objets

Le sol visible d'une pièce est borné par la position à l'écran de la plinthe du mur du fond :
`d_mur = f_écran · H / (y_plinthe − y_horizon)`. Dans ces quatre clips : salon ≈ 8 m, cuisine 5
à 7 m, chambre ≈ 4,3 m, salle de bain ≈ 3,9 m. Les profondeurs `pos.z` recopiées du salon
plaçaient les objets **derrière** le mur des trois autres pièces — ils flottaient au‑dessus de
la plinthe. Deuxième borne, latérale : au‑delà de `x ≈ 4 m`, le panoramique ne ramène jamais
l'objet dans le cadre.

Troisième borne, qu'on oublie facilement : un objet qui arrive **tard** doit être **à droite**,
puisque le panoramique va de la gauche vers la droite — mais la droite est aussi ce qui sort du
cadre en premier. Dans la salle de bain, le dernier objet (`vase2`) était à `x = 3,7` et restait
coupé par le bord ; il est passé au **premier plan** (`x = 0,95`, `z = −3,35`), dans le vide entre
le banc et le tabouret. C'est la sortie de secours quand le côté droit est plein : rapprocher
plutôt qu'écarter.

Trois autres bornes, toutes rencontrées :

- **Le budget d'arrivée.** La transition mange la queue de la pièce (`T = 0.16`). Un objet dont
  le `at` dépasse `1 − T` arrive pile quand le couloir monte en fondu : il n'a jamais son moment
  à l'écran. Les `at` sont donc répartis entre **0,05 et 0,72** dans toutes les pièces. À
  refaire si on touche à `T`.
- **Les modèles à plusieurs objets.** `fitOnFloor` centre la boîte englobante du glTF entier.
  Pour `pachira_aquatica_01` (deux arbres) l'origine ne tombe sur aucun des deux troncs et
  l'ensemble déborde du cadre — remplacé par `potted_plant_02`. Pour
  `outdoor_table_chair_set_01` (table + deux chaises), l'origine tombe **entre** la table et les
  chaises : ce qu'on pose « sur la table » doit rester à moins de 0,2 m de `pos`, pas à la
  demi-largeur du plateau, sinon ça flotte à côté.
- **Le facteur de scroll des captures.** Une pièce vaut **10 hauteurs de fenêtre** (le pin fait
  `1000 %` par pièce, quel qu'en soit le nombre). `tools/shot.mjs` utilisait 8,1 : toutes les
  captures tombaient 19 % trop tôt, ce qui a fait diagnostiquer « hors cadre » des objets qu'on
  n'avait simplement pas encore atteints, et déclenché des corrections de position inutiles.
  Avant de déplacer un objet parce qu'on ne le voit pas, **vérifier que la légende affichée est
  bien la sienne** — c'est le témoin le plus simple qu'on est au bon endroit du scroll.

Un objet posé sur un meuble de la vidéo (`pos[1] > 0.25`) ne projette **pas** d'ombre solaire :
le sol 3D passe sous le plan de travail filmé, l'ombre y tomberait à côté du meuble. Seule sa
petite ombre de contact, collée sous lui, est conservée (`scene.js`).

## La transition entre deux pièces

Il n'y a **pas de carton** : ni voile blanc, ni titre plein écran. Entre deux pièces on joue un
vrai **plan de liaison** — un travelling avant de couloir qui finit sur une porte fermée
(`public/video/hall.mp4`, Kling, 400 crédits). Le même plan sert aux trois transitions : c'est
la même maison.

Un paramètre `q` court de 0 à 1 sans rupture d'un côté à l'autre de la frontière : 0 → 0,5 sur
la queue de la pièce qu'on quitte, 0,5 → 1 sur la tête de celle qu'on rejoint (`T = 0.16` de
progression locale de chaque côté). Sur cet arc :

- la pièce **pousse vers l'avant** (`PUSH`) en sortant, et se dégonfle en entrant ;
- le couloir monte en fondu, **couvre tout l'écran** au milieu, puis redescend ;
- son temps est piloté par `q` (`scrub.seekLink`), et sur la fin un **zoom numérique centré sur
  la porte** (`DOOR`, `HALL_DOOR`) prend le relais du travelling optique jusqu'à ce que le bois
  remplisse le cadre. C'est là que la pièce suivante apparaît : on entre par la porte ;
- le nom de la pièce s'affiche **sur le couloir**, sans fond.

Ce que ça règle au passage : la caméra 3D n'existe qu'en un exemplaire et chaque pièce a son
propre calage, donc la bascule d'un calage à l'autre est instantanée. Elle a lieu à `q = 0,5`,
exactement quand le couloir couvre tout l'écran — l'échange ne se voit pas.

Quatre pièges, tous rencontrés :

1. Le fond est redessiné **une seconde fois par-dessus la 3D**, avec l'opacité du fondu
   (`uAlpha`). Sans ça les meubles de la pièce qu'on quitte restent opaques et flottent dans le
   couloir. C'est ce second passage qui les efface au même rythme que leur pièce.
2. La poussée dans la porte doit être **finie avant** que le couloir s'efface. Réglées sur la
   même fenêtre, on quitte le plan alors que la porte est encore petite, et la transition n'a
   plus rien d'une porte.
3. Le shader divise le recadrage par le zoom (`uv = .5 + (vUv - .5 - pan) / zoom`). Tout `pan`
   destiné à viser un point de l'image doit donc être multiplié par le zoom courant.
4. Une vidéo Blob jamais cherchée n'a **aucune image décodée** et sort noire dans le fondu.
   `scrub.js` force une première image sur tous les clips, plans de liaison compris.

Position de la porte : `DOOR = [0.48, 0.40]`, relevé sur la dernière image du clip
(`tools/hall_end_grid.jpg` la quadrille). À refaire pour tout nouveau plan de couloir.

Réglages : `T`, `PUSH`, `HALL_ZOOM`, `HALL_DOOR`, `DOOR` en haut de `drive()` dans `main.js`.
`node tools/trans.mjs <pièce> [pas] [nombre]` capture la transition image par image.
`node tools/pick.mjs <pièce> <id>` sélectionne un objet : prouve qu'il charge et montre où il est.

## La nuit

Un interrupteur « Nuit / Jour » dans l'en-tête. Mêmes pièces, même calage caméra, mêmes objets :
chaque plan a été refilmé lampes allumées, et la scène 3D passe en éclairage de nuit.

La chaîne (tout dans `tools/night/` et `tools/raw/*-night.mp4`) :

1. Première image de chaque clip servi (`ffmpeg -frames:v 1`), y compris le couloir.
2. **Relighting** de cette image en image-à-image (Nano Banana Pro, 160 crédits, 16:9 2K) avec un
   prompt qui ne décrit que le changement : nuit bleue dehors, lampes chaudes dedans, « keep
   everything else strictly identical ». La géométrie est conservée au pixel près, donc le calage
   `camera` de la pièce reste valable tel quel.
3. **Image-à-vidéo** Kling v3 Pro (500 crédits / 5 s, `resolution pro, duration 5,
   generate_audio "false", aspect_ratio 16:9`) depuis cette image : « locked-off tripod, slow
   steady pan to the right, pure rotation, nothing moves ». Le couloir : « slow dolly forward
   toward the closed door ».
4. `track_pan.py` sur chaque clip → `public/video/<clip>-night-track.json`, encodage `-g 8 -bf 0`
   et 720p `-g 4`, poster `public/images/<clip>-night.jpg`.

Dérives mesurées (px sur 1920, jour → nuit) : salon −356 → −240, cuisine −857 → −409, chambre
−332 → −479, salle de bain −310 → −291, terrasse −498 → −730. L'amplitude diffère d'un tournage
à l'autre : c'est la trajectoire mesurée qui pilote la caméra, pas une valeur commune, donc les
objets restent posés au bon endroit. Ils arrivent simplement un peu plus tôt ou plus tard dans le
cadre.

**Piège** : le premier essai de salle de bain panotait dans le mauvais sens et à peine (+90 px).
Vérifier le signe et l'amplitude de la dérive de chaque clip avant de l'encoder ; regénérer avec
un prompt qui nomme ce que le pan doit découvrir (« reveals more of the tiled wall on the
right ») a suffi. Un clip qui panote à l'envers se retourne aussi avec `-vf reverse`.

Dans le code :

- `content.js` : `night` par pièce (`video`, `poster`, `track`, `sun` = clair de lune bleu faible,
  `lights` = points chauds posés là où la vidéo montre une lampe), `link.night`, et `glow` sur les
  objets qui s'allument (lampe bras, lanterne, bougeoirs).
- `scene.js` : `setVariant({ videos, links, tracks, night })` échange les textures et les
  trajectoires ; `applyLighting()` règle soleil, hémisphère, environnement, exposition et lampes.
- `main.js` : le jeu de nuit se charge en arrière-plan après le préchargeur (`loadNight`), le
  bouton n'est activé que si les six clips sont là ; `setNight` passe par le noir (`setDim(1)`),
  échange la chaîne de scrub et reprend au même point du parcours.
- `style.css` : `body.night` inverse la palette (papier sombre, encre claire), l'en-tête passe en
  `mix-blend-mode: screen`.
- `tools/night_shot.mjs <pièce> [pl]` capture jour puis nuit au même point → `tools/n_<pièce>_*.jpg`.

## Structure

- `src/content.js` — tout le contenu : marque, hero, `rooms[]` (vidéo, poster, track, caméra, soleil, objets avec `pos` en mètres, `rot`, `at` = arrivée dans la pièce, légende, `tint` = matériaux teintables et options avec supplément ; ids uniques sur toute la maison), contact. Palettes partagées `CUIR/BOIS/METAL/LIN/GRES`.
- `src/scene.js` — fond vidéo (quad + VideoTexture par pièce, zoom/pan), une scène 3D commune, `setRoom(i)` bascule caméra, vidéo, soleil et objets visibles ; `tintable()` transforme la diffuse en carte de luminance ; arrivée animée ; survol ; focus ; déplacement au sol ; rotation. Un modèle illisible est ignoré avec un avertissement.
- `src/main.js` — contenu, curseur aimanté, scroll (section épinglée 1000 % par pièce), légendes dans une zone fixe à gauche, voile entre pièces, panneau de composition, glisser‑déposer, index des objets de la pièce, liste des pièces à droite.
- `tools/fetch_assets.py` — télécharge les scans Poly Haven listés dans `MODELS` (User-Agent obligatoire).
- `src/scrub.js` — `clips` s'enchaînent et portent la progression du scroll ; `links` (le couloir) sont chargés et cherchés pareil mais hors chaîne, c'est la transition qui décide de leur temps.

## Pièges rencontrés

- Une vidéo Blob jamais lue ni cherchée n'a pas d'image décodée : premier saut au-dessus du seuil du scrub.
- Chrome ne charge aucune vidéo dans un onglet jamais mis au premier plan : la page reste sur le préchargeur.
- Diffuse de scan déjà colorée : `material.color` ne peut qu'assombrir sans `tintable()` ; contraste réduit à 55 % sinon les velours font tache.
- `vidstabdetect` écrit un fichier binaire (TRF1) ; OpenCV `phaseCorrelate` fait le travail.
- Un `.bin` glTF tronqué donne « Invalid typed array length » au chargement : comparer la taille au `byteLength` déclaré.

## Choix des modèles

Le catalogue Poly Haven est majoritairement rustique, gothique, chinois ou industriel : très peu
de mobilier contemporain. Les pièces filmées, elles, sont modernes (murs crème, chêne, marbre,
laiton). Le premier jet mélangeait les deux — une table à pied central Louis‑Philippe et des
chaises capitonnées baroques dans une cuisine minimaliste. Ce qui a été retenu, et pourquoi :

- Famille commune : **chêne clair / cuir cognac / laiton / grès blanc**, peu de pièces peintes.
- Cuisine : `wooden_table_02` + `painted_wooden_chair_01` (remplacent `round_wooden_table_01` et
  `dining_chair_02`), `tea_set_01` à la place du pichet fleuri `jug_01`, `brass_pan_01` pour
  compléter la famille laiton du `brass_pot_01`.
- Salon : le dining `round_wooden_table_01` sort (une table de salle à manger dans un salon), la
  `coffee_table_round_01` prend sa place ; `pachira_aquatica_01` tient l'angle.
- `sofa_02` est une banquette capitonnée, pas un canapé contemporain : elle est **assumée**
  comme telle dans le texte (chinée, restaurée, retapissée) et part sur une teinte sombre plutôt
  que sur le lin crème, qui la faisait virer rococo.
- Salle de bain : Poly Haven n'a **aucun** sanitaire. La pièce se meuble donc en accessoires que
  la marque vendrait vraiment — banc, tabouret pliant, boîte d'osier, bougeoirs, pot de terre.
  Le chandelier posé au sol et le seau de sauna sont sortis.
- `wooden_stool_02` (0,27 m) et `wicker_basket_02` (0,23 m) étaient vendus comme un tabouret et
  un panier à linge : ce sont des objets de table. Les dimensions réelles de chaque scan sont
  maintenant en commentaire dans `content.js`, à côté de l'objet — c'est ce qui décide de la
  hauteur `pos[1]` quand on le pose sur un meuble, et de ce qu'on a le droit d'en dire.

`python - ` sur les `.gltf` (min/max des accesseurs POSITION) donne dimensions et noms de
matériaux d'un coup ; les noms de matériaux sont ce que `tint` doit référencer.

## À faire

1. Tester sur mobile (déplacement au doigt vs scroll).
2. Contenu client, hébergement, domaine.
