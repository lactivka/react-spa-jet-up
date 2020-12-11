import { Skeleton } from 'antd';
import WeatherCard from 'components/WeatherCard';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import './index.scss';

const Weather: React.FC = () => {
  const data = useSelector((state: RootState) => state.weather.locationWeather);
  const { loading } = useSelector((state: RootState) => state.weather);

  return (
    <Skeleton loading={loading} active>
      <div className="weather">

        {
          data.map(item => {return <WeatherCard item={item} key={item.id} />})
        }
      </div>
    </Skeleton>
  );
};

export default Weather;
