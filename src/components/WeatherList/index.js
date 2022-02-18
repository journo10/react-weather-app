import React from "react";

const WeatherList = ({ weather }) => {
  return (
    <main>
      <div className="location">
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="weather">
              {weather.name.toUpperCase()}, {weather.sys.country}
            </div>
            <div className="weather">
              <div className="weather">
                {Math.round(weather.main.temp)}
                <strong>°C</strong>
              </div>
              <div className="weather">
                {weather.weather[0].description.toUpperCase()}
              </div>
            </div>
          </div>
        ) : ("")}
      </div>
    </main>
  );
};

export default WeatherList;
