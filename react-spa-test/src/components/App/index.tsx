import { Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import * as React from 'react';
import './index.scss';
import Authorization from 'components/Authorization';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const App: React.FC = () => {
  const { isLoginFormOpen } = useSelector(
    (state: RootState) => state.loginForm,
  );

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
