from flask import Flask
import requests
from dotenv import load_dotenv
import os

load_dotenv()
apiKey = os.environ.get("SPOONACULAR_APIKEY")

app = Flask(__name__)


@app.route('/')
def hello():
  return {"data": 'Hello, World!'}

@app.route('/test', methods = ['GET'])
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