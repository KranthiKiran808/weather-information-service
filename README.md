Assignment for Weather Information Service

### To Start the Project

- Download dependencies by running `npm install`
- Start up the app using `npm start`


### Request 

Use http://localhost:3000/weather?city=hyderabad
and change city name 


### Sample Response

{
  "request": {
    "type": "City",
    "query": "Hyderabad, India",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Hyderabad",
    "country": "India",
    "region": "Andhra Pradesh",
    "lat": "17.375",
    "lon": "78.474",
    "timezone_id": "Asia/Kolkata",
    "localtime": "2024-08-31 08:13",
    "localtime_epoch": 1725091980,
    "utc_offset": "5.50"
  },
  "current": {
    "observation_time": "02:43 AM",
    "temperature": "23 °C",
    "weather_code": 296,
    "weather_icons": [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0017_cloudy_with_light_rain.png"
    ],
    "weather_descriptions": [
      "Light Rain"
    ],
    "wind_speed": "19 km/h",
    "wind_degree": 280,
    "wind_dir": "W",
    "pressure": "1008 mb",
    "precip": "0.8 mm",
    "humidity": "94%",
    "cloud_cover": "100%",
    "feelslike": 25,
    "uv_index": 5,
    "visibility": 4,
    "is_day": "yes"
  }
}