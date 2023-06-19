from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time
from datetime import datetime
import threading

app = Flask(__name__)
CORS(app)  # Adiciona o middleware Flask-CORS

data = []  # Lista para armazenar os dados
times = []  # Lista para armazenar os tempos
lock = threading.Lock()  # Lock para sincronização do acesso às listas
update_thread = None  # Referência para a thread de atualização

@app.route('/data', methods=['POST', 'GET'])
def post_data():
    try:
        current_time = int(time.time())

        # Obtém cópias dos dados e tempos atualizados
        with lock:
            updated_data = list(data)
            updated_times = list(times)

        return jsonify({'data': updated_data, 'times': updated_times, 'timestamp': current_time})

    except Exception as e:
        return jsonify({'message': 'Error occurred', 'error': str(e)})

def update_data():
    global data, times

    time.sleep(15)

    start_time = datetime.now()  # Obtém o tempo de referência no início da atualização

    for _ in range(50):  # Executa durante 20 segundos
        value = round(random.uniform(0, 360), 2)  # Arredonda para duas casas decimais
        current_time = int((datetime.now() - start_time).total_seconds())  # Calcula o tempo decorrido em segundos

        with lock:
            data.append(value)
            times.append(current_time)

        time.sleep(0.5)  # Aguarda 1 segundo

    # Limpa os dados após 20 segundos
    

if __name__ == '__main__':
    update_thread = threading.Thread(target=update_data)
    update_thread.start()
    app.run(port=4000)


