import { SearchOutlined } from '@ant-design/icons';
import { getWeatherByCityURL } from '@constants/constants';
import {
  BackTop,
  Button,
  Empty,
  Form,
  Input,
  Skeleton,
  Tag,
  Tooltip,
} from 'antd';
import WeatherCard from 'components/WeatherCard';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLocation } from 'reducers/weather';
import { OWMData } from 'reducers/weather/models';
import { getWeather } from 'requests';
import { RootState } from 'store';
import './index.scss';

const Weather: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.weather);
  const { loadingCity } = useSelector((state: RootState) => state.weather);
  const data = useSelector((state: RootState) => state.weather.locationWeather);
  const [form] = Form.useForm();

  const onFinish = (values: { 'city-name': string }) => {
    const city = values['city-name'];
    const reqURL = getWeatherByCityURL(city);
    dispatch(getWeather(reqURL));
  };

  const onTagClose = (item: OWMData) => {
    dispatch(deleteLocation(data.indexOf(item)));
  };

  return (
    <Skeleton loading={loading} active>
      <div className="weather">
        <div className="tags-container">
          {data.map((item) => {
            return (
              <Tag
                key={item.name}
                closable
                onClose={() => onTagClose(item)}
                className="city-tag"
              >
                {item.name}
              </Tag>
            );
          })}
        </div>
        <div className="input-city-container">
          <Form
            form={form}
            name="input-city"
            layout="inline"
            onFinish={onFinish}
            className="input-city-form"
          >
            <Form.Item
              name="city-name"
              rules={[{ required: true, message: 'Please input city!' }]}
            >
              <Input
                prefix={<SearchOutlined className="site-form-item-icon" />}
                placeholder="City"
                allowClear
                className="city-input-field"
              />
            </Form.Item>
            <Form.Item>
              <Tooltip title="Add city">
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  loading={loadingCity}
                >
                  {!loadingCity && 'Add city'}
                  {loadingCity && 'Adding'}
                </Button>
              </Tooltip>
            </Form.Item>
          </Form>
        </div>
        {data.length > 0 &&
          data.map((item) => {
            return <WeatherCard item={item} key={item.id} />;
          })}
        {data.length === 0 && <Empty description="No selected city" />}
        <BackTop>
          <div className="backtop-button">UP</div>
        </BackTop>
      </div>
    </Skeleton>
  );
};

export default Weather;
