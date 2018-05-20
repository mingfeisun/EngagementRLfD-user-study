import json
from flask import Flask
from flask import request
from flask_cors import CORS
from time import gmtime, strftime


app = Flask(__name__)
CORS(app)

@app.route('/test', methods=['POST', 'GET'])
def hello_world():
    if request.method == 'POST':
        timestamp = strftime("%Y%m%d%H%M%S", gmtime())
        content = request.get_json()
        user_id = content["uid"]
        user_info = content["info"]
        user_name = user_info[0]["value"]
        with open("%s-%s-%s.txt"%(timestamp, user_id, user_name), "w") as fout:
            fout.write(json.dumps(content))
        return "ok"
    if request.method == 'GET':
        return 'Test for engagement user study!'
