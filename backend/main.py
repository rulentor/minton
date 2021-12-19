from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
app.config.from_object(__name__)

# Включаем CORS
CORS(app)


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run(host='localhost', port=9090, debug=True)


