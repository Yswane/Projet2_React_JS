import React, { Component } from 'react';
import './Banniergame.css';
import { Link } from 'react-router-dom';

class Banniergame extends Component {
  render() {
    return (<>
      <div className="banner-game">
        <div className="home-game-banner-bg">
          <img src="https://image.noelshack.com/fichiers/2019/14/3/1554305698-smallbonhome.png" alt="" className="Chuck-small-fellow" />
          <img src="https://image.noelshack.com/fichiers/2019/14/4/1554338155-chuckchallenge.png" alt="" className="Title-banner-game" />
          <span className="home-game-banner-span">Viens affronter Chuck Norris! <br />Et tente de gagner ...</span>
        </div>
        <div className="banner-game-hover">
          <div className="banner-game-hover-inner">
            <h2>Let's go!</h2>
            <a href="/Game" Target="_blank" className="banner-game-button" title="Learn More"><Link to="/Game" />Jouez! <span className="icon-play"><i className="fas fa-chevron-circle-right"></i></span></a>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default Banniergame;