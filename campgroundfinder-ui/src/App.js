import React from 'react';
import { Navigation } from './components/navigation';
import { Home } from './components/home';
import { About } from './components/about';
import { Search } from './components/search';
import { Footer } from './components/footer';
import { Route, Switch } from 'react-router-dom';

import './assets/css/style.default.css'; 
import './assets/css/landy-iconfont.css'; 
import './assets/css/custom.css'; 
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Switch>
        <Route exact path='/' render={() => ( <Home /> )}/>
        <Route exact path='/about' render={() => ( <About /> )}/>
        <Route exact path='/search/:zipcode' render={(props) => ( <Search zipcode={props.match.params.zipcode} /> )}/>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
