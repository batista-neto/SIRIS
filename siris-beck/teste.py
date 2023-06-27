import requests

url = "http://192.168.100.26:5000/buffer"

response=requests.get(url)

print(response.json())