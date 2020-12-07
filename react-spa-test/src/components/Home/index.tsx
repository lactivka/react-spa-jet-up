import * as React from 'react';
import welcome from '../../assets/4207.jpg';
import './index.scss';

const Home: React.FC = () => {
  return (
    <main>
      <div className="home">
        <img src={welcome} alt="Welcome" className="home-image" />
        <div className="home-info">
          <div className="info-part1">
            <h2>HOORAY!</h2>
            <p>Welcome and come in to our site</p>
            <p>We hope you enjoy your stay with us! </p>
          </div>
          <div className="info-part2">
            <h3>FREE TO JOIN. EASY TO USE</h3>
            <p>
              See recent news, select news to save in your profile, find out
              weather forecast to every place you want
            </p>
            <p>
              Authorize, please, to get access to every power of our website
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
