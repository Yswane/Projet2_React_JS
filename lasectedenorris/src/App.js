import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Chuck from './screen/Chuck';
// import VideoHome from './screen/VideoHome'
import Home from './screen/Home';
import Shop from './screen/Shop';
import Game from './screen/Game';
// import Filmography from './screen/Filmography';

import ChuckBar from "./components/ChuckBar"
import Footer from "./components/Footer"
import Filmchuck from "./screen/Filmchuck"
import sound from './sound/Sound-P90.mp3'

class App extends Component {

  state = { play: false };
  src = sound;
  audio = new Audio(this.src);  
  
      play = () => {
        this.setState({ play: this.state.play });
        console.log(this.audio);
        
        this.setState({ play: this.audio.play() });
      }

  render() {
    return (
      <div>
  <header id="haut">
    <ChuckBar gunSound={this.play} />
  </header>
  

        <Switch>
          {/* <Route exact="/" component={VideoHome} /> */}
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/chuck" component={Chuck}/>
          <Route path="/game" component={Game}/>
          <Route path="/filmography" component={Filmchuck}/>
      </Switch>
<footer id="bas">
<Footer />    
</footer>
</div>
    );
  }
}

export default App;
