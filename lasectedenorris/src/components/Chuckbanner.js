import React, { Component } from "react";
import  './Chuckbanner.css';
import '../Style.css';
import {Link} from 'react-router-dom';

class Chuckbanner extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}

  }

  render() {
      
    return (
        
      <div className="banner1">
      <div className="pic_of_chuck2">
      <img src="https://image.noelshack.com/fichiers/2019/14/2/1554217990-chuck1.png" alt="picture_chuck"></img>
      </div> 
      <div className="text_ban1">
      <p>Chuck Norris is my Homeboy Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.

      Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs Chuck Norris died 20 years ago, Death just hasn't built up the courage to tell him yet Chuck Norris quite likes Chris.

      When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down, The chief export of Chuck Norris is Pain. Contrary to popular belief, Chuck Norris, not the box jellyfish of northern Australia, is the most venomous creature on earth, Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face, Someone once videotaped Chuck Norris getting pissed off.</p>
      <a href="/Chuck" Target="_blank" className="button-primary1" title="Learn More"><Link to="/Chuck" />Chuck facts <span className="icon-play"><i className="fas fa-chevron-circle-right"></i></span></a>
      </div>
      </div>
    );
  }
}

export default Chuckbanner;
