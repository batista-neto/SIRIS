from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
dados = []
dados_antena = {"antena1":[],"antena2":[]}
    # Rota para receber os dados do buffer via POST
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

@app.route('/buffer2', methods=['GET'] )
def dados_antenax():
    return dados_antena
@app.route('/buffer2/antena1', methods=['POST'] )
def dados_antena1():
    dadosantena1 = request['dados']

    dados_antena["antena1"] = [dadosantena1]
    
    return '', 200

# def get_data():
#     data = []
#     return jsonify(data)
# # def receive_buffer():
# #     buffer_data = request.get_json()
# #         # Faça o processamento necessário com o buffer de dados
# #         # ...

# #         # Retorne uma resposta (opcional)
# #         return jsonify({'message': 'Buffer de dados recebido com sucesso'})

# #     return app

# # Executa a função para criar a API
# #api = create_api()

if __name__ == '__main__':
    # Executa a API no servidor local na porta 5000
    app.run(host='0.0.0.0', port=5000)