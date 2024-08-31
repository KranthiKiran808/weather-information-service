import express from 'express';
import fetch from 'node-fetch';

const app = express();

const formattedWeatherInfo = (jsonData) => {
  const {request, location, current} = jsonData;
  const {observation_time,temperature, weather_code, weather_icons, weather_descriptions, wind_speed, wind_degree, wind_dir, pressure, precip, humidity, cloudcover, feelslike, uv_index, visibility, is_day} = current

  const formatedJsonData = {
    request,
    location,
    current:{
      observation_time,
      temperature: `${temperature} °C`,
      weather_code, 
      weather_icons, 
      weather_descriptions,
      wind_speed:`${wind_speed} km/h`,
      wind_degree,
      wind_dir,
      pressure: `${pressure} mb`,
      precip: `${precip} mm`,
      humidity: `${humidity}%`,
      cloud_cover: `${cloudcover}%`,
      feelslike, 
      uv_index, 
      visibility, 
      is_day
    }
  }
  
  return formatedJsonData;
}

app.get('/weather/', async (request, response) => {
  const {city} = request.query;
  if (!city) {
    return response.send({ error: 'City is required' });
  }
  const url = `https://api.weatherstack.com/current?access_key=9128b6c2bd5e0349babb1b968422f96b&query=${city}`;

  try {
    const apiResponse = await fetch(url);
    const jsonData = await apiResponse.json();
    const formatedJsonData =  formattedWeatherInfo(jsonData)
    response.send(formatedJsonData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
