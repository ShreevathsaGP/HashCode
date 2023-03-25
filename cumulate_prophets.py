import json
import os
import prophet
from prophet.serialize import model_to_json, model_from_json

models = list(filter(lambda x: x.split('.')[-1] == "json", os.listdir("data/prophet_models")))

prophets = {}
path = "data/prophet_models/"
for m in models:
    with open(path + m, 'r') as f:
        assert len(m.split('.')) == 2, "name does not match <name>.json"
        
        print(m.split(".")[0])
        prophets[m.split(".")[0]] = json.load(f)


with open("data/prophets.json", 'w') as f:
    json.dump(prophets, f, indent = 4)
