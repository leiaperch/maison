"""Télécharge les modèles et HDRI Poly Haven (CC0) utilisés par le gabarit.
    python tools/fetch_assets.py
"""
import json, os, urllib.request
UA = {'User-Agent': 'Mozilla/5.0'}
def get(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA))
def save(u, path):
    if os.path.exists(path): return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with get(u) as r, open(path, 'wb') as f: f.write(r.read())
    print('ok', path, os.path.getsize(path) // 1000, 'ko')
MODELS = {'modern_arm_chair_01': '2k', 'round_wooden_table_01': '1k', 'Ottoman_01': '1k', 'potted_plant_02': '1k',
          'modern_coffee_table_01': '1k', 'desk_lamp_arm_01': '1k', 'ceramic_vase_02': '1k', 'throw_pillows_01': '1k', 'side_table_01': '1k',
          'sofa_02': '1k', 'wooden_stool_01': '1k', 'book_encyclopedia_set_01': '1k', 'brass_vase_01': '1k', 'Camera_01': '1k',
          'bar_chair_round_01': '1k', 'wooden_cutting_board': '1k', 'brass_pot_01': '1k', 'wooden_bowl_01': '1k', 'jug_01': '1k', 'vintage_electric_kettle': '1k', 'wicker_basket_01': '1k', 'food_apple_01': '1k', 'wine_bottles_01': '1k', 'WoodenTable_03': '1k', 'dining_chair_02': '1k',
          'vintage_day_bed': '1k', 'painted_wooden_nightstand': '1k', 'mid_century_lounge_chair': '1k', 'alarm_clock_01': '1k', 'Lantern_01': '1k', 'wooden_crate_01': '1k',
          'wooden_stool_02': '1k', 'wicker_basket_02': '1k', 'wooden_bucket_01': '1k', 'brass_candleholders': '1k', 'calathea_orbifolia_01': '1k', 'painted_wooden_bench': '1k', 'wooden_candlestick': '1k',
          'wooden_table_02': '1k', 'painted_wooden_chair_01': '1k', 'tea_set_01': '1k', 'brass_pan_01': '1k', 'side_table_tall_01': '1k',
          'folding_wooden_stool': '1k', 'planter_pot_clay': '1k', 'pachira_aquatica_01': '1k', 'ceramic_vase_04': '1k', 'wooden_bowl_02': '1k',
          'potted_plant_04': '1k', 'coffee_table_round_01': '1k',
          'outdoor_table_chair_set_01': '1k', 'planter_box_02': '1k', 'potted_plant_01': '1k',
          'brass_goblets': '1k', 'watering_can_metal_01': '1k',
          # déclinaisons de modèles (panneau « Modèle »)
          'sofa_03': '1k', 'Sofa_01': '1k', 'ArmChair_01': '1k', 'GreenChair_01': '1k', 'Rockingchair_01': '1k', 'CoffeeTable_01': '1k', 'industrial_coffee_table': '1k',
          'ceramic_vase_01': '1k', 'ceramic_vase_03': '1k', 'brass_vase_02': '1k', 'brass_vase_03': '1k', 'antique_ceramic_vase_01': '1k', 'anthurium_botany_01': '1k',
          'WoodenChair_01': '1k', 'SchoolChair_01': '1k', 'metal_stool_01': '1k', 'metal_stool_02': '1k', 'painted_wooden_stool': '1k', 'ClassicNightstand_01': '1k',
          'ceramic_pot': '1k', 'pot_enamel_01': '1k', 'planter_box_01': '1k', 'planter_box_03': '1k', 'small_wooden_table_01': '1k', 'painted_wooden_sofa': '1k', 'painted_wooden_chair_02': '1k'}
for m, res in MODELS.items():
    files = json.load(get(f'https://api.polyhaven.com/files/{m}'))
    e = files['gltf'][res]['gltf']
    base = f'public/models/{m}/'
    save(e['url'], base + os.path.basename(e['url']))
    for rel, inc in e.get('include', {}).items():
        save(inc['url'], base + rel)
for h in ('brown_photostudio_02', 'studio_small_09'):
    files = json.load(get(f'https://api.polyhaven.com/files/{h}'))
    e = files['hdri']['1k']['hdr']
    save(e['url'], f'public/hdri/{h}_1k.hdr')
