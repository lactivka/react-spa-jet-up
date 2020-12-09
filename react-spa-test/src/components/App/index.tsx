import { Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import * as React from 'react';
import './index.scss';
import Authorization from 'components/Authorization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchNews from 'requests';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <main> */}
      <div className="main-content">
        <Switch>
          <Route path="/login" component={Authorization} />
          <Navigation />
        </Switch>
      </div>
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default App;
