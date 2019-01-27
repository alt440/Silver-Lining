import requests
import json

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


class SearchPlays(object):
    def playDate(self):
        return self.playDate == playDate
    def artistID(self):
        return self.artistID == artistID
    def songID(self):
        return self.songID == songID
    def state(self):
        return self.state == state
    def latitude(self):
        return self.latitude == latitude
    def longitude(self):
        return self.longitude == longitude
    def style(self):
        return self.style == style

