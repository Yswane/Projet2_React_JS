import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Chuck from './screen/Chuck';
import VideoHome from './screen/VideoHome'
import Home from './screen/Home';
import Shop from './screen/Shop';
import Game from './screen/Game';
import ButtonChuckTop from './components/ButtonChuckTop';

import ChuckBar from "./components/ChuckBar"
import Footer from "./components/Footer";
import Filmchuck from "./screen/Filmchuck";



class App extends Component {

  render() {
    return (
      <div>
  <header id="haut">
  <ButtonChuckTop />
    <ChuckBar />
  </header>
        

        <Switch>
          <Route exact path="/" component={VideoHome} />
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/chuck" component={Chuck} />
          <Route path="/game" component={Game} />
          <Route path="/filmography" component={Filmchuck} />
        </Switch>

        
        <footer id="bas">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
