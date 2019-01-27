import requests
import json

#API get
url = "https://conuhacks-playback-api.touchtunes.com/plays"
querystring = {"startDate":"2018-11-05T00:00:00Z","endDate":"2018-11-10T00:00:00Z","offset":"0"}
payload = ""
headers = {
    'client-secret': "9923ac9b-8fd3-421f-b0e5-952f807c6885",
    'Content-Type': "application/json",
    }
response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

json = response.json()
datas = json["plays"]


playDate = []
artistID = []
songID = []
state = []
latitude = []
longitude = []
style = []
for data in datas:
    playDate.append(data["playDate"])
    artistID.append(data["artistId"])
    songID.append(data["songId"])
    state.append(data["state"])
    latitude.append(data["latitude"])
    longitude.append(data["longitude"])
    style.append(data["style"])
#print(playDate, artistID, songID, state, latitude, longitude, style)


###CHANGED HERE
#Get artist name
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
    json1 = response.json()

    import json
    text = json.dumps(json1)
    print(text)

    artist.append(json1["artistName"])



###CHANGED HERE
#Get song name
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
    json2 = response.json()
    
    import json
    text = json.dumps(json2)
    print(text)
    
    title.append(json2["songTitle"])



# User Interface
def EnvArtist(Artist):
    i = Artist.lower()
    a = [x.lower() for x in artist]
    for val in a:
        if (i == val):
            return 1;
    return 0;
    

        
def EnvTitle(Title):
    j = Title.lower()
    b = [y.lower() for y in title]
    for val in b:
        if (j == val):
            return 1;
    return 0;

