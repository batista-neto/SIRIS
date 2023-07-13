from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time
from datetime import datetime
import threading

app = Flask(__name__)
CORS(app)  # Adiciona o middleware Flask-CORS

dados = []
dadosantena = {"antena1": ["","","","",""],
               "antena2": ["","","","",""],
               "mensagem1":"","mensagem2":"",
               "stop1": "", "stop2": "",
               "anomalia1": "", "anomalia2": "",
               "save1": "", "save2": ""}

@app.route('/buffer', methods=['POST', 'GET'] )
def receber_dados():
    global dados
    if request.method == 'POST':
        print(request.json)
        
        dados = request.json  # Obter os dados enviados no formato JSON
        
        
        # Faça o processamento necessário com os dados recebidos
        # ...
        return dados

    elif request.method == 'GET':
        # Lógica para manipular requisições GET
        return jsonify(dados)
    

@app.route('/configantena',methods=['GET'])
def azimute():
    return dadosantena

@app.route('/configantena/antena1', methods=['POST'])
def configantena():
    port = request.json['port']
    bautrate = request.json['bautrate']
    bytesize = request.json['bytesize']
    parit = request.json['parit']
    stopbits = request.json['stopbits']

    dadosantena["antena1"] = [port, bautrate, bytesize, parit, stopbits]

    return '', 200

@app.route('/configantena/antena2', methods=['POST'])
def configantena_antena2():
    port = request.json['port']
    bautrate = request.json['bautrate']
    bytesize = request.json['bytesize']
    parit = request.json['parit']
    stopbits = request.json['stopbits']

    dadosantena["antena2"] = [port, bautrate, bytesize, parit, stopbits]

    return '', 200


@app.route('/configantena/mensagem1', methods=['POST'])
def mensagem1():
    mensagem = request.json['mensagem']
    dadosantena["mensagem1"] = mensagem

    return '', 200


@app.route('/configantena/mensagem2', methods=['POST'])
def mensagem2():
    mensagem = request.json['mensagem']
    dadosantena["mensagem2"] = mensagem

    return '', 200

@app.route('/configantena/stop1', methods=['POST'])
def stop1():
    stop = request.json['stop']
    dadosantena["stop1"] = stop

    return '', 200

@app.route('/configantena/stop2', methods=['POST'])
def stop2():
    stop = request.json['stop']
    dadosantena["stop2"] = stop

    return '', 200

@app.route('/configantena/save1', methods=['POST'])
def save1():
    save = request.json['save']
    dadosantena["save1"] = save

    return '', 200

@app.route('/configantena/save2', methods=['POST'])
def save2():
    save = request.json['save']
    dadosantena["save2"] = save

    return '', 200

@app.route('/configantena/anomalia1', methods=['POST'])
def anomalia1():
    anomalia = request.json['anomalia']
    dadosantena["anomalia1"] = anomalia

    return '', 200

@app.route('/configantena/anomalia2', methods=['POST'])
def anomalia2():
    anomalia = request.json['anomalia']
    dadosantena["anomalia2"] = anomalia

    return '', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)


