import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import './index.scss';
import WeatherCardProps from './models';

const WeatherCard = ({ item }: WeatherCardProps): JSX.Element => {
  const { weather, main, wind, dt, name } = item;
  const date = new Date(dt).toDateString();
  const time = new Date(dt).toLocaleTimeString();

  return (
    <div className="weather-card-container">
      <div className="weather-wrapper">
        <div className="weather-info-block1 bordered">
          <div className="location-data">
            <div className="location-name">{name}</div>
            <div className="location-date">{date}</div>
            <div className="location-time">{time}</div>
          </div>
          <div className="weather-info-main">
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt="weather icon"
              className="weather-icon"
            />
            <div className="weather-description">{weather[0].description}</div>
          </div>
        </div>
        <div className="weather-info-block2">
          <div className="temperature-block bordered">
            <div className="weather-current-temperature">{`${main.temp} °C`}</div>
            <div className="weather-feel-temperature">{`feels:    ${main.feels_like} °C`}</div>
          </div>
          <div className="weather-info-additional bordered">
            <div className="weather-temperature-interval row">
              <span className="info-text"> today:</span>
              <span className="info-value">{`${main.temp_min.toPrecision(
                1,
              )} ... ${main.temp_max.toPrecision(1)} °C`}</span>
            </div>
            <div className="weather-humidity row">
              <span className="info-text"> humidity:</span>
              <span className="info-value">{`${main.humidity} %`}</span>
            </div>
            <div className="weather-wind row">
              <span className="info-text"> wind:</span>
              <span className="info-value">{`${wind.speed} m/s`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
