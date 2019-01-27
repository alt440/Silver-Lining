#output the name of the artist

from plays import *

import requests
import json


artist = []
for ID in artistID:
    ID = str(ID)
    url = "https://conuhacks-playback-api.touchtunes.com/artist/"+ ID
    querystring = {"artistId":""}
    payload = ""
    headers = {
    'client-secret': "9923ac9b-8fd3-421f-b0e5-952f807c6885",
    'Content-Type': "application/json",
    }
    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
    json = response.json()
    artist.append(json["artistName"])
