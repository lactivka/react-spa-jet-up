import { Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import * as React from 'react';
import './index.scss';
import Authorization from 'components/Authorization';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchNews, { getCurrentLocation } from 'requests';
import { getCurrentLocationURL } from '@constants/constants';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [path, setPath] = useState('/');

  useEffect(() => {
    dispatch(fetchNews());
    dispatch(getCurrentLocation({ URL: getCurrentLocationURL, dispatch }));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/login">
            <Authorization path={path} />
          </Route>
          <Navigation setPath={setPath} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
