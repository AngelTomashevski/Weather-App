import React, { useEffect, useState } from "react";

const Forecast = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(
      " http://api.openweathermap.org/data/2.5/forecast/daily?q=Skopje&units=metric&cnt=7&appid=886705b4c1182eb1c69f28eb8c520e20"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.list))
      .catch((err) => console.log(err));
  }, []);

  const renderWeathersDays = weather.map((day) => {
    console.log(day);
    return (
      <div key={day.dt} className="flex">
        <img
          src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
          alt={"icon-img"}
        />
        <p>{day.weather[0].main}</p>
        <p>{day.weather[0].description}</p>
        <p>{day.temp.morn}&#176;C</p>
        <p>{day.temp.night}&#176;C</p>
        <p>{day.temp.min}&#176;C</p>
        <p>{day.temp.max}&#176;C</p>
        <p>{day.pressure}hpa</p>
        <p>{day.humidity}%</p>
        <p>{day.speed}m/s</p>
        <p>{day.deg}&#176;</p>
      </div>
    );
  });
  return (
    <div className="Forecast ">
      <div className="flex">
        <p>Icon</p>
        <p>Weather</p>
        <p>Description</p>
        <p>Morning Temperature</p>
        <p>Night Temperature</p>
        <p>Min Temperature</p>
        <p>Max Temperature</p>
        <p>Pressure</p>
        <p>Humidity</p>
        <p>Wind Speed</p>
        <p>Wind Direction</p>
      </div>

      <div>{renderWeathersDays}</div>
    </div>
  );
};

export default Forecast;
