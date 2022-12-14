from dog_images import DOGS_IMAGES
import random

from flask import Flask, make_response

app = Flask(__name__)


@app.route('/dog_images', methods=["GET"])
def get_random_dog_image():
    response = make_response(random.choice(DOGS_IMAGES))
    response.headers['Content-Type'] = 'text/plain'
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
