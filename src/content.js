// Tout le contenu du gabarit. Un client = un autre content.js.
// Les objets 3D sont des scans Poly Haven (CC0), servis depuis public/models.
// Les tailles en commentaire sont les dimensions réelles du scan (largeur ×
// hauteur × profondeur, en mètres) : c'est ce qui décide de la hauteur à
// laquelle un objet se pose sur un meuble, et de ce qu'on peut en dire.

export const site = {
  brand: 'Maison',
  nav: [['#piece', 'La visite'], ['#contact', 'Rendez-vous']],
  cta: { label: 'Prendre rendez-vous', href: '#contact' },
  footer: 'Fabriqué en petites séries. Livré monté.',
};

export const hero = {
  kicker: 'Collection 2026',
  title: ['Une maison vide.', 'Habitez-la.'],
  text: 'Faites défiler : la caméra traverse les pièces et les objets arrivent un à un. Cliquez sur l’un d’eux pour le composer, le déplacer, le tourner.',
};

// Teintes réutilisées d'une pièce à l'autre
const CUIR = (extra = 0) => [{ name: 'Cognac', hex: '#b8703e' }, { name: 'Noir fumé', hex: '#2a2723' }, { name: 'Sauge', hex: '#8a9a82', price: extra }, { name: 'Crème', hex: '#d9cbb3', price: extra }];
const BOIS = (extra = 0) => [{ name: 'Chêne clair', hex: '#d8bd95' }, { name: 'Noyer', hex: '#6d4a33', price: extra }, { name: 'Noir', hex: '#2b2622', price: extra }];
const METAL = (extra = 0) => [{ name: 'Laiton', hex: '#c9a86a' }, { name: 'Acier noir', hex: '#33312e', price: extra }, { name: 'Argent', hex: '#cfcfcf', price: extra }];
const LIN = (extra = 0) => [{ name: 'Lin naturel', hex: '#c9bda6' }, { name: 'Ardoise', hex: '#4b525a', price: extra }, { name: 'Ocre', hex: '#b7893f', price: extra }, { name: 'Vert forêt', hex: '#3d5a48', price: extra }];
const GRES = () => [{ name: 'Sable', hex: '#d8c9b1' }, { name: 'Céladon', hex: '#9fb8a5' }, { name: 'Terre', hex: '#a9683f' }, { name: 'Nuit', hex: '#2f3540' }];
const TECK = (extra = 0) => [{ name: 'Teck huilé', hex: '#a97845' }, { name: 'Teck grisé', hex: '#9a978c', price: extra }, { name: 'Noyer', hex: '#6d4a33', price: extra }];
const PEINTURE = (extra = 40) => [{ name: 'Blanc cassé', hex: '#e8e2d6' }, { name: 'Sauge', hex: '#8a9a82', price: extra }, { name: 'Terre', hex: '#a9683f', price: extra }, { name: 'Ardoise', hex: '#4b525a', price: extra }];

// Chaque pièce : une vidéo en panoramique sur pied (Kling), sa trajectoire mesurée,
// le calage de la caméra 3D sur sa perspective (vérifier avec ?calib&room=N), le
// soleil, et les objets posés sur son sol (mètres). `at` = moment d'arrivée dans
// la pièce (0..1). Ids uniques sur toute la maison.
//
// Le calage n'est PAS commun aux quatre pièces : chaque clip a sa propre hauteur
// de prise de vue et son propre angle de site. Le salon est filmé à hauteur
// d'œil presque de niveau, la cuisine et la chambre plongent légèrement, la
// salle de bain est la plus basse et la plus courte. Un calage recopié d'une
// pièce à l'autre pose les objets sur un sol qui n'est pas celui de la vidéo :
// c'est exactement ce qui les faisait flotter.
export const rooms = [
  {
    id: 'salon', name: 'Le salon', video: '/video/room.mp4', poster: '/images/room.jpg', track: '/video/room-track.json',
    camera: { fov: 76, height: 1.4, pitch: 2.2, yaw: 16, roll: 0 },
    sun: { pos: [-5, 3.4, -4.5], color: '#ffe3c2', intensity: 2.4 },
    items: [
      // sofa_02 — 1,81 × 0,71 × 0,82
      { id: 'sofa', at: 0.05, model: '/models/sofa_02/sofa_02_1k.gltf', name: 'Banquette Loire', price: 3900, pos: [-2.7, 0, -6.9], rot: 0.35,
        caption: ['D’abord', 'la banquette'], text: 'Hêtre sculpté, capitonnage main. On la chine, on la restaure, on la retapisse dans le tissu que vous choisissez.',
        tint: [{ material: 'sofa_02', label: 'Tissu', options: [{ name: 'Vert forêt', hex: '#3d5a48' }, { name: 'Ardoise', hex: '#4b525a' }, { name: 'Ocre', hex: '#b7893f', price: 200 }, { name: 'Lin naturel', hex: '#c9bda6', price: 200 }] }] },
      // modern_arm_chair_01 — 0,82 × 1,02 × 0,99
      { id: 'chair', at: 0.12, model: '/models/modern_arm_chair_01/modern_arm_chair_01_2k.gltf', name: 'Fauteuil Ormeau', price: 2450, pos: [0.77, 0, -6.12], rot: -0.35,
        caption: ['Le fauteuil', 'que l’on garde'], text: 'Chêne massif, cuir pleine fleur, quarante heures d’atelier.',
        tint: [{ material: 'modern_arm_chair_01_pillow', label: 'Cuir', options: CUIR(120) }, { material: 'modern_arm_chair_01_legs', label: 'Bois', options: BOIS(180) }] },
      // Ottoman_01 — 0,88 × 0,62 × 0,62
      { id: 'ottoman', at: 0.18, model: '/models/Ottoman_01/Ottoman_01_1k.gltf', name: 'Repose-pieds Ormeau', price: 690, pos: [1.19, 0, -5.02], rot: -0.2,
        caption: ['Et de quoi', 'poser les pieds'], text: 'Même cuir, même tannage, il vieillit avec le fauteuil.', tint: [{ material: 'Ottoman_01', label: 'Cuir', options: CUIR(60) }] },
      // side_table_01 — 0,55 × 0,55 × 0,45, plateau à 0,55
      { id: 'side', at: 0.24, model: '/models/side_table_01/side_table_01_1k.gltf', name: 'Guéridon Aube', price: 420, pos: [-1.02, 0, -6.29], rot: 0.3,
        caption: ['Un guéridon', 'à portée de main'], text: 'Deux plateaux tournés dans la masse, rien à visser.', tint: [{ material: 'side_table_01', label: 'Bois', options: BOIS(90) }] },
      // ceramic_vase_02 — 0,22 × 0,31, posé sur le guéridon
      { id: 'vase', at: 0.28, model: '/models/ceramic_vase_02/ceramic_vase_02_1k.gltf', name: 'Vase Grès', price: 140, pos: [-1.02, 0.55, -6.29], rot: 0,
        caption: ['Et quelque chose', 'dessus'], text: 'Grès émaillé, tourné à Vallauris.', tint: [{ material: 'ceramic_vase_02', label: 'Émail', options: GRES() }] },
      // Camera_01 — 0,21 × 0,08, sur le guéridon aussi
      { id: 'camera', at: 0.32, model: '/models/Camera_01/Camera_01_1k.gltf', name: 'Appareil Argentique', price: 0, pos: [-0.8, 0.55, -6.06], rot: 0.9,
        caption: ['Un souvenir', 'à portée de main'], text: 'Celui du grand-père, il ne fonctionne plus, mais on ne le range pas.', tint: [] },
      // modern_coffee_table_01 — 0,60 × 0,39 × 1,20, plateau à 0,39
      { id: 'coffee', at: 0.39, model: '/models/modern_coffee_table_01/modern_coffee_table_01_1k.gltf', name: 'Table basse Lisse', price: 1180, pos: [2.2, 0, -6.3], rot: 0.15,
        caption: ['Une table basse', 'qui tient sa place'], text: 'Plateau pierre, structure chêne, hauteur 39 cm.', tint: [{ material: 'modern_coffee_table_01', label: 'Finition', options: [{ name: 'Naturel', hex: '#d9cbb8' }, { name: 'Fumé', hex: '#8c7461', price: 140 }] }] },
      // book_encyclopedia_set_01 — 0,04 × 0,24 × 0,17, sur la table basse
      { id: 'books', at: 0.45, model: '/models/book_encyclopedia_set_01/book_encyclopedia_set_01_1k.gltf', name: 'Encyclopédie', price: 0, pos: [2.1, 0.39, -6.15], rot: 0.3,
        caption: ['De quoi', 'lire'], text: 'Douze volumes, reliés main, en dépôt chez nous.', tint: [] },
      // desk_lamp_arm_01 — 0,20 × 0,89 × 0,61, posée au sol derrière la table basse
      { id: 'lamp', at: 0.5, model: '/models/desk_lamp_arm_01/desk_lamp_arm_01_1k.gltf', name: 'Lampe Bras', price: 390, pos: [2.4, 0, -7.4], rot: -2.2,
        caption: ['La lumière', 'du soir'], text: 'Bras articulé, laiton ou acier laqué.', tint: [{ material: 'desk_lamp_arm_01', label: 'Métal', options: METAL(0) }] },
      // brass_vase_01 — 0,23 × 0,69, sur la table basse Lisse (plateau à 0,39)
      { id: 'brass', at: 0.64, model: '/models/brass_vase_01/brass_vase_01_1k.gltf', name: 'Vase Laiton', price: 210, pos: [2.45, 0.39, -6.5], rot: 0,
        caption: ['Et au centre', 'un éclat'], text: 'Laiton martelé, patine libre.', tint: [{ material: 'brass_vase_001', label: 'Métal', options: METAL(60) }] },
      // potted_plant_02 — 0,73 × 0,63 × 0,76. Le pachira_aquatica_01 essayé ici
      // contient DEUX arbres : `fitOnFloor` centre la paire, l'ensemble déborde
      // du cadre et son origine ne tombe sur aucun des deux troncs.
      { id: 'plant', at: 0.72, model: '/models/potted_plant_02/potted_plant_02_1k.gltf', name: 'Monstera', price: 0, pos: [3.1, 0, -6.9], rot: 0.4,
        caption: ['Il ne manquait', 'que le vivant'], text: 'Offert avec toute commande. Elle tient l’angle et supporte l’ombre.', tint: [] },
    ],
  },
  {
    id: 'cuisine', name: 'La cuisine', video: '/video/kitchen.mp4', poster: '/images/kitchen.jpg', track: '/video/kitchen-track.json',
    camera: { fov: 76, height: 1.25, pitch: -1.5, yaw: 4, roll: 0 },
    sun: { pos: [-6, 3.2, -3.5], color: '#ffe9cd', intensity: 2.6 },
    items: [
      // wooden_table_02 — 1,13 × 0,80 × 0,71 : une table de cuisine, pas de salle à manger
      { id: 'ktable', at: 0.05, model: '/models/wooden_table_02/wooden_table_02_1k.gltf', name: 'Table Établi', price: 1450, pos: [-0.5, 0, -4.6], rot: 0.15,
        caption: ['Une table', 'pour tous les jours'], text: 'Chêne massif, plateau épais, 113 cm : elle tient dans une cuisine et encaisse tout.', tint: [{ material: 'wooden_table_02', label: 'Bois', options: BOIS(180) }] },
      // painted_wooden_chair_01 — 0,43 × 0,96 × 0,54
      { id: 'kchair1', at: 0.12, model: '/models/painted_wooden_chair_01/painted_wooden_chair_01_1k.gltf', name: 'Chaise Sillon', price: 340, pos: [-1.35, 0, -3.9], rot: 0.6,
        caption: ['Des chaises', 'qui ne grincent pas'], text: 'Hêtre massif, dossier cintré à la vapeur, peinture à l’huile.', tint: [{ material: 'painted_wooden_chair_01', label: 'Peinture', options: PEINTURE() }] },
      { id: 'kchair2', at: 0.17, model: '/models/painted_wooden_chair_01/painted_wooden_chair_01_1k.gltf', name: 'Chaise Sillon', price: 340, pos: [0.35, 0, -3.8], rot: -0.5,
        caption: ['Et une', 'deuxième'], text: 'Vendue à l’unité, jamais par lot.', tint: [{ material: 'painted_wooden_chair_01', label: 'Peinture', options: PEINTURE() }] },
      // wooden_bowl_01 — 0,31 × 0,09, sur la table (plateau à 0,80)
      { id: 'bowl', at: 0.24, model: '/models/wooden_bowl_01/wooden_bowl_01_1k.gltf', name: 'Saladier Bois', price: 85, pos: [-0.75, 0.79, -4.6], rot: 0,
        caption: ['Sur la table', 'un saladier'], text: 'Tourné dans un seul bloc de frêne.', tint: [{ material: 'wooden_bowl_01', label: 'Bois', options: BOIS(0) }] },
      // food_apple_01 — 0,10, dans le saladier
      { id: 'apple', at: 0.27, model: '/models/food_apple_01/food_apple_01_1k.gltf', name: 'Pomme', price: 0, pos: [-0.75, 0.85, -4.6], rot: 0,
        caption: ['Et une pomme,', 'forcément'], text: 'Elle est vraie, à peu près.', tint: [] },
      // tea_set_01 — 0,19 × 0,16 × 0,27, sur la table
      { id: 'tea', at: 0.32, model: '/models/tea_set_01/tea_set_01_1k.gltf', name: 'Service à thé', price: 190, pos: [-0.05, 0.79, -4.75], rot: 0.4,
        caption: ['Un service', 'pour le matin'], text: 'Porcelaine blanche, six tasses, la théière tient un litre.', tint: [] },
      // wooden_cutting_board — 0,45 × 0,04 × 0,25, sur le plan de travail (0,90)
      { id: 'board', at: 0.39, model: '/models/wooden_cutting_board/wooden_cutting_board_1k.gltf', name: 'Planche Billot', price: 95, pos: [2.0, 0.9, -5.1], rot: 0.2,
        caption: ['Sur le plan', 'de travail'], text: 'Hêtre debout, huilée, elle se ponce et repart.', tint: [{ material: 'wooden_cutting_board', label: 'Bois', options: BOIS(0) }] },
      // vintage_electric_kettle — 0,32 × 0,30 × 0,25
      { id: 'kettle', at: 0.46, model: '/models/vintage_electric_kettle/vintage_electric_kettle_1k.gltf', name: 'Bouilloire Sifflet', price: 260, pos: [2.85, 0.9, -5.35], rot: -0.6,
        caption: ['La bouilloire', 'du matin'], text: 'Acier étamé, elle siffle encore.', tint: [{ material: 'vintage_electric_kettle', label: 'Métal', options: METAL(0) }] },
      // brass_pot_01 — 0,30 × 0,29
      { id: 'pot', at: 0.51, model: '/models/brass_pot_01/brass_pot_01_1k.gltf', name: 'Fait-tout Laiton', price: 310, pos: [3.65, 0.9, -5.6], rot: 0,
        caption: ['Et de quoi', 'cuire'], text: 'Laiton étamé, fond épais, il va au four.', tint: [{ material: 'brass_pot_01', label: 'Métal', options: METAL(0) }] },
      // brass_pan_01 — 0,19 × 0,05 × 0,45 : la même famille de laiton que le fait-tout
      { id: 'pan', at: 0.56, model: '/models/brass_pan_01/brass_pan_01_1k.gltf', name: 'Poêle Laiton', price: 180, pos: [4.4, 0.9, -5.8], rot: 0.5,
        caption: ['La poêle', 'qui va avec'], text: 'Même laiton, même atelier, manche riveté.', tint: [{ material: 'brass_pan_01', label: 'Métal', options: METAL(0) }] },
      // bar_chair_round_01 — 0,49 × 0,75 × 0,48
      { id: 'stool2', at: 0.63, model: '/models/bar_chair_round_01/bar_chair_round_01_1k.gltf', name: 'Tabouret Haut', price: 290, pos: [4.1, 0, -3.05], rot: 0.4,
        caption: ['Un tabouret', 'pour le comptoir'], text: 'Assise cuir, piètement acier, 75 cm.', tint: [{ material: 'Bar Chair', label: 'Cuir', options: CUIR(40) }] },
      // wicker_basket_01 — 0,38 × 0,12 × 0,30 : une corbeille plate, pas un panier de marché
      { id: 'basket', at: 0.72, model: '/models/wicker_basket_01/wicker_basket_01_1k.gltf', name: 'Corbeille Osier', price: 70, pos: [4.9, 0, -3.7], rot: 0.2,
        caption: ['Et une corbeille', 'pour le pain'], text: 'Osier tressé main, 38 cm.', tint: [] },
    ],
  },
  {
    id: 'chambre', name: 'La chambre', video: '/video/bedroom.mp4', poster: '/images/bedroom.jpg', track: '/video/bedroom-track.json',
    camera: { fov: 76, height: 1.35, pitch: -3, yaw: 6, roll: 0 },
    sun: { pos: [-5.5, 3.2, -3.5], color: '#ffeed8', intensity: 2.2 },
    items: [
      // vintage_day_bed — 1,97 × 1,13 × 0,85
      { id: 'bed', at: 0.05, model: '/models/vintage_day_bed/vintage_day_bed_1k.gltf', name: 'Lit de jour Anse', price: 2600, pos: [0.35, 0, -3.7], rot: 0.1,
        caption: ['Un lit', 'de jour'], text: 'Hêtre cintré, sommier à lattes, matelas laine.', tint: [{ material: 'vintage_day_bed', label: 'Teinte', options: [{ name: 'Noyer', hex: '#6d4a33' }, { name: 'Chêne clair', hex: '#d8bd95', price: 200 }, { name: 'Noir', hex: '#2b2622', price: 200 }] }] },
      // throw_pillows_01 — 0,58 × 0,42 × 0,45, sur le lit (assise à ~0,45)
      { id: 'pillows', at: 0.13, model: '/models/throw_pillows_01/throw_pillows_01_1k.gltf', name: 'Coussins Lin', price: 95, pos: [-0.35, 0.36, -3.65], rot: 0.6,
        caption: ['Des coussins', 'en lin lavé'], text: 'Housse déhoussable, garnissage plumes.', tint: [{ material: 'throw_pillows_01', label: 'Tissu', options: LIN(0) }] },
      // painted_wooden_nightstand — 0,50 × 0,66 × 0,63
      { id: 'night1', at: 0.22, model: '/models/painted_wooden_nightstand/painted_wooden_nightstand_1k.gltf', name: 'Chevet Aube', price: 480, pos: [-1.5, 0, -3.6], rot: 0.2,
        caption: ['Un chevet', 'de chaque côté'], text: 'Un tiroir, une niche, peinture à l’huile.', tint: [{ material: 'painted_wooden_nightstand', label: 'Peinture', options: PEINTURE() }] },
      // Lantern_01 — 0,12 × 0,29, sur le chevet (0,66)
      { id: 'lantern', at: 0.28, model: '/models/Lantern_01/Lantern_01_1k.gltf', name: 'Lanterne', price: 160, pos: [-1.57, 0.66, -3.65], rot: 0.4,
        caption: ['Une lumière', 'douce'], text: 'Laiton et verre soufflé.', tint: [{ material: 'Lantern_01_brass', label: 'Métal', options: METAL(0) }] },
      // alarm_clock_01 — 0,10 × 0,13, sur le chevet
      { id: 'clock', at: 0.35, model: '/models/alarm_clock_01/alarm_clock_01_1k.gltf', name: 'Réveil', price: 60, pos: [-1.35, 0.66, -3.47], rot: 0.9,
        caption: ['Et l’heure', 'qu’il est'], text: 'Mécanique, il sonne fort.', tint: [] },
      // mid_century_lounge_chair — 1,01 × 1,17 × 1,19
      { id: 'lounge', at: 0.46, model: '/models/mid_century_lounge_chair/mid_century_lounge_chair_1k.gltf', name: 'Fauteuil Repos', price: 1750, pos: [2.3, 0, -3.4], rot: -0.6,
        caption: ['Un fauteuil', 'pour lire'], text: 'Noyer, cuir, dossier incliné à 105°.', tint: [{ material: 'mid_century_lounge_chair', label: 'Cuir', options: CUIR(120) }] },
      // side_table_tall_01 — 0,38 × 0,76 × 0,38 : la sellette à côté du fauteuil
      { id: 'pedestal', at: 0.55, model: '/models/side_table_tall_01/side_table_tall_01_1k.gltf', name: 'Sellette Brin', price: 380, pos: [3.2, 0, -3.7], rot: 0.3,
        caption: ['Une sellette', 'contre le fauteuil'], text: 'Chêne tourné, 76 cm, le plateau fait juste la place d’une tasse.', tint: [{ material: 'side_table_tall_01', label: 'Bois', options: BOIS(60) }] },
      // ceramic_vase_04 — 0,18 × 0,34, sur la sellette
      { id: 'vase3', at: 0.62, model: '/models/ceramic_vase_04/ceramic_vase_04_1k.gltf', name: 'Vase Col', price: 120, pos: [3.2, 0.76, -3.7], rot: 0,
        caption: ['Et un vase', 'au col étroit'], text: 'Grès blanc, une tige suffit.', tint: [] },
      // calathea_orbifolia_01 — 0,60 × 0,42 × 0,56
      { id: 'plant2', at: 0.72, model: '/models/calathea_orbifolia_01/calathea_orbifolia_01_1k.gltf', name: 'Calathea', price: 0, pos: [4.0, 0, -3.45], rot: 0,
        caption: ['Et du', 'vivant'], text: 'Offert avec toute commande. Elle aime la lumière filtrée du rideau.', tint: [] },
    ],
  },
  {
    id: 'sdb', name: 'La salle de bain', video: '/video/bath.mp4', poster: '/images/bath.jpg', track: '/video/bath-track.json',
    camera: { fov: 76, height: 1.2, pitch: -2.5, yaw: 2, roll: 0 },
    sun: { pos: [-4.5, 3, -3], color: '#ffeede', intensity: 2 },
    items: [
      // painted_wooden_bench — 1,16 × 0,89 × 0,50 : banc à dossier, assise à ~0,45
      { id: 'bench', at: 0.05, model: '/models/painted_wooden_bench/painted_wooden_bench_1k.gltf', name: 'Banc Vestiaire', price: 520, pos: [0.1, 0, -3.6], rot: 0.1,
        caption: ['Un banc', 'pour s’asseoir'], text: 'Pin peint à l’huile, il ne craint ni l’eau ni la vapeur.', tint: [{ material: 'painted_wooden_bench', label: 'Peinture', options: PEINTURE() }] },
      // wicker_basket_02 — 0,23 × 0,22 : une boîte, pas un panier à linge
      { id: 'basket2', at: 0.15, model: '/models/wicker_basket_02/wicker_basket_02_1k.gltf', name: 'Boîte d’osier', price: 45, pos: [0.1, 0.6, -3.55], rot: 0.2,
        caption: ['Une boîte', 'sur le banc'], text: 'Osier tressé, couvercle plein, 23 cm.', tint: [] },
      // folding_wooden_stool — 0,53 × 0,44 × 0,55
      { id: 'stool3', at: 0.25, model: '/models/folding_wooden_stool/folding_wooden_stool_1k.gltf', name: 'Tabouret Pliant', price: 240, pos: [1.6, 0, -3.2], rot: 0.5,
        caption: ['Un tabouret', 'qui se plie'], text: 'Teck huilé, il vit dehors comme dedans et se range à plat.', tint: [{ material: 'folding_wooden_stool', label: 'Bois', options: BOIS(0) }] },
      // wooden_bowl_02 — 0,13 × 0,07, sur le tabouret (0,44)
      { id: 'bowl2', at: 0.33, model: '/models/wooden_bowl_02/wooden_bowl_02_1k.gltf', name: 'Coupelle Frêne', price: 35, pos: [1.6, 0.44, -3.2], rot: 0,
        caption: ['Et une coupelle', 'pour le savon'], text: 'Frêne huilé, tourné dans la masse.', tint: [{ material: 'wooden_bowl_02', label: 'Bois', options: BOIS(0) }] },
      // brass_candleholders — 0,41 × 0,84 × 0,36 : au sol, ce sont de grands bougeoirs
      { id: 'candles', at: 0.42, model: '/models/brass_candleholders/brass_candleholders_1k.gltf', name: 'Bougeoirs', price: 140, pos: [2.4, 0, -3.6], rot: 0.3,
        caption: ['Et des', 'bougies'], text: 'Laiton, trois hauteurs, la plus grande fait 84 cm.', tint: [] },
      // planter_pot_clay — 0,27 × 0,22
      { id: 'clay', at: 0.53, model: '/models/planter_pot_clay/planter_pot_clay_1k.gltf', name: 'Pot de terre', price: 40, pos: [3.0, 0, -3.35], rot: 0,
        caption: ['Un pot', 'de terre cuite'], text: 'Terre cuite non émaillée, elle boit l’eau et sèche seule.', tint: [] },
      // potted_plant_04 — 0,17 × 0,27, dans le pot
      { id: 'succulent', at: 0.6, model: '/models/potted_plant_04/potted_plant_04_1k.gltf', name: 'Succulente', price: 0, pos: [2.7, 0, -3.15], rot: 0,
        caption: ['Et quelque chose', 'de vivant'], text: 'Offerte avec toute commande, dans son cache-pot. Elle se contente de la vapeur.', tint: [] },
      // ceramic_vase_02 — 0,22 × 0,31
      { id: 'vase2', at: 0.72, model: '/models/ceramic_vase_02/ceramic_vase_02_1k.gltf', name: 'Vase Grès', price: 140, pos: [0.95, 0, -3.35], rot: 0,
        caption: ['Et un vase', 'au sol'], text: 'Grès émaillé, tourné à Vallauris. Le même qu’au salon, en plus grand.', tint: [{ material: 'ceramic_vase_02', label: 'Émail', options: GRES() }] },
    ],
  },
  {
    // Le seul plan tourné dehors. Kling y panote dans l'autre sens que les quatre
    // pièces (dérive +498 au lieu de −356 à −857), et ce sens-là découvre la
    // piscine au lieu de la dalle : les objets tardifs finissaient dans l'eau.
    // Le clip est donc monté à l'envers (`-vf reverse`) — un panoramique sur pied
    // se retourne sans que ça se voie. La caméra y est basse (0,80 m) et le champ
    // plus serré que dedans (62° au lieu de 76°) : c'est le calage automatique sur
    // les dalles qui le dit, et c'est le seul plan où il soit bien conditionné.
    id: 'terrasse', name: 'La terrasse', video: '/video/pool.mp4', poster: '/images/pool.jpg', track: '/video/pool-track.json',
    camera: { fov: 62, height: 0.8, pitch: -4.5, yaw: 0, roll: 0 },
    sun: { pos: [7, 3.5, -9], color: '#ffdfb8', intensity: 2.4 },
    items: [
      // outdoor_table_chair_set_01 — 0,79 × 0,86 × 1,71, plateau à 0,73
      { id: 'garden', at: 0.05, model: '/models/outdoor_table_chair_set_01/outdoor_table_chair_set_01_1k.gltf', name: 'Table Terrasse', price: 1650, pos: [0.6, 0, -5.0], rot: 0.2,
        caption: ['Dehors aussi,', 'une table'], text: 'Teck massif et acier laqué, les chaises se plient. Vendue avec les deux.',
        tint: [{ material: 'outdoor_table_chair_set_01_table', label: 'Bois', options: TECK(160) }, { material: 'outdoor_table_chair_set_01_chair', label: 'Assise', options: TECK(0) }] },
      // wooden_bowl_01 — 0,31 × 0,09, sur le plateau
      { id: 'bowl3', at: 0.14, model: '/models/wooden_bowl_01/wooden_bowl_01_1k.gltf', name: 'Saladier Bois', price: 85, pos: [0.6, 0.73, -5.0], rot: 0.5,
        caption: ['Le même saladier', 'qu’à la cuisine'], text: 'Frêne huilé. Il passe de la table à la terrasse et revient.', tint: [{ material: 'wooden_bowl_01', label: 'Bois', options: BOIS(0) }] },
      // brass_goblets — 0,15 × 0,27
      { id: 'goblets', at: 0.23, model: '/models/brass_goblets/brass_goblets_1k.gltf', name: 'Gobelets Laiton', price: 160, pos: [0.48, 0.73, -5.14], rot: 0.3,
        caption: ['De quoi', 'trinquer'], text: 'Laiton massif, quatre pièces, ils tiennent le froid.', tint: [] },
      // wine_bottles_01 — 0,08 × 0,33
      { id: 'bottles2', at: 0.31, model: '/models/wine_bottles_01/wine_bottles_01_1k.gltf', name: 'Bouteilles', price: 0, pos: [0.70, 0.73, -5.11], rot: 0.4,
        caption: ['Et de quoi', 'les remplir'], text: 'Les vôtres, on ne fournit toujours pas.', tint: [] },
      // folding_wooden_stool — 0,53 × 0,44 × 0,55 : le même qu'à la salle de bain
      { id: 'stool4', at: 0.41, model: '/models/folding_wooden_stool/folding_wooden_stool_1k.gltf', name: 'Tabouret Pliant', price: 240, pos: [1.6, 0, -4.5], rot: -0.4,
        caption: ['Celui-là,', 'vous le connaissez'], text: 'Le tabouret de la salle de bain. Teck huilé : on l’avait dit, il vit dehors comme dedans.', tint: [{ material: 'folding_wooden_stool', label: 'Bois', options: TECK(0) }] },
      // planter_box_02 — 1,25 × 0,45 × 0,47
      { id: 'planter', at: 0.52, model: '/models/planter_box_02/planter_box_02_1k.gltf', name: 'Jardinière', price: 320, pos: [2.9, 0, -6.3], rot: 0.15,
        caption: ['Une jardinière', 'qui fait muret'], text: 'Douves de mélèze, doublure zinc, 125 cm. Elle grise, et on la laisse griser.', tint: [{ material: 'planter_box_02', label: 'Bois', options: TECK(0) }] },
      // potted_plant_01 — 0,59 × 1,34 × 0,63
      { id: 'tree', at: 0.62, model: '/models/potted_plant_01/potted_plant_01_1k.gltf', name: 'Laurier en pot', price: 0, pos: [3.4, 0, -6.1], rot: 0,
        caption: ['Et de l’ombre', 'à venir'], text: 'Offert avec toute commande. Feuillage persistant, il passe l’hiver dehors.', tint: [] },
      // watering_can_metal_01 — 0,19 × 0,20 × 0,45
      { id: 'can', at: 0.72, model: '/models/watering_can_metal_01/watering_can_metal_01_1k.gltf', name: 'Arrosoir Zinc', price: 75, pos: [2.3, 0, -3.5], rot: 0.6,
        caption: ['Et de quoi', 's’en occuper'], text: 'Zinc soudé, pomme amovible, 5 litres.', tint: [{ material: 'watering_can_metal_01', label: 'Métal', options: METAL(0) }] },
    ],
  },
];

// Le plan de liaison joué entre deux pièces : un travelling avant de couloir qui
// finit sur une porte fermée. Le même pour les trois transitions — c'est la même
// maison. `DOOR` dans main.js dit où est la porte dans la dernière image.
export const link = { video: '/video/hall.mp4', poster: '/images/hall.jpg' };

export const contact = {
  kicker: 'Rendez-vous',
  title: ['Venez', 'vous asseoir'],
  text: 'Le showroom est ouvert sur rendez-vous, du mardi au samedi. On vous prête un fauteuil quinze jours avant de décider.',
  mail: 'bonjour@maison.example',
  address: '14 rue des Tanneurs, Lyon',
};
