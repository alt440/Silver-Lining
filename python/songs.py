from plays import *

import requests
import json

title = []
for s in songID:
    s = str(s)
    url = "https://conuhacks-playback-api.touchtunes.com/song/" + s
    querystring = {"songId":""}
    payload = ""
    headers = {
    'client-secret': "9923ac9b-8fd3-421f-b0e5-952f807c6885",
    'Content-Type': "application/json",
    }
    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
    json = response.json()
    title.append(json["songTitle"])

