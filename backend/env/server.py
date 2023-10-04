from flask import Flask, request
import requests
from dotenv import load_dotenv
import os
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub
from PIL import Image
import base64
from io import BytesIO

load_dotenv()
apiKey = os.environ.get("SPOONACULAR_APIKEY")

app = Flask(__name__)


@app.route('/')
def hello():
  return {"data": 'Hello, World!'}

@app.route('/home', methods = ['GET'])
def getHomePageData():
  def getHomePageDataHelper(sort):
    response = requests.get('https://api.spoonacular.com/recipes/complexSearch', {"apiKey": apiKey, "sort": sort})
    return response.json()["results"]

  data = {
    "Picture Tab Ad": [],
    "Popular Recipes": ["popularity"],
    "Healthy Options": ["healthiness"],
    "Random Ad": [],
    "Desserts": ["sugar"]
  }

  for opt in data:
    if data[opt]:
      data[opt] = getHomePageDataHelper(data[opt][0])

  return data

@app.route('/randomPage', methods = ['GET'])
def getRandomPageData():

  response = requests.get('https://api.spoonacular.com/recipes/complexSearch', {"apiKey": apiKey})
  data = response.json()["results"]
  return data

@app.route('/ingredientSearch', methods = ['POST'])
def getIngredientSearchData():
  request_body = request.json
  response = requests.get('https://api.spoonacular.com/recipes/findByIngredients', {"apiKey": apiKey, "ingredients": request_body["ingredients"]})
  data = response.json()
  return data

@app.route('/imageUpload', methods = ['POST'])
def getImageData():
  image = request.form.get('image')
  image = np.array(image)
  image = tf.image.convert_image_dtype(image, tf.float32)
  image = tf.image.resize(image, (320, 320))  # Resize to match MobileNetV2 input size
  image = tf.expand_dims(image, 0)  # Add batch dimension
  
  # Perform object detection
  model = hub.load("https://tfhub.dev/tensorflow/efficientdet/lite1/detection/1")
  boxes, scores, classes, num_detections = model(image)
  print(scores, classes, num_detections)
  return {}

if __name__ == "__main__":
  app.run(ssl_context='adhoc')