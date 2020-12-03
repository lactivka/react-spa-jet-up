import { Switch } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import * as React from 'react';
import './index.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="main-content">
          <Switch>
            <Navigation />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
