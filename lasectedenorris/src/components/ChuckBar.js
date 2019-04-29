import React, { Component } from 'react';
import './ChuckBar.css';
import { NavLink } from 'react-router-dom';



class ChuckBar extends Component {
  render() {
    return (
    <div>
        
        <header className="NavBarStart haut">
          <div className="bg-faded">
          <div className="Image-logo"><img src="https://s100.iracing.com/wp-content/uploads/2016/08/sticker375x360.u2.png" alt="logo de chuck"></img></div>
          <div className="main-nav-container">
            <ul className="Main-nav">
              <li><a href="./src/screen/Home.js" onClick={this.props.gunSound}><NavLink exact to="/home"> Accueil</NavLink></a></li>
              <li><a href="./src/screen/Shop.js" onClick={this.props.gunSound}><NavLink exact to="/Shop"> Magasin </NavLink></a></li>
              <li className="LiImageChuck"><a href="./src/screen/Home.js" onClick={this.props.gunSound}> <NavLink exact to="/"> <img  src="https://image.noelshack.com/fichiers/2019/14/3/1554323367-kisspng-globe-life-park-in-arlington-texas-rangers-texas-r-texas-rangers-5b0efe2ebf2f32-1568870215277092307831.png" alt=" de chuck"></img></NavLink></a></li>
              <li><a href="./src/screen/Chuck.js" onClick={this.props.gunSound}><NavLink exact to="/Chuck"> Chuck Page </NavLink></a></li>
              <li><a href="./src/screen/Game.js" onClick={this.props.gunSound}><NavLink exact to="/Game"> Jeu quizz </NavLink></a></li>
            </ul>
          </div>
          </div>
        </header>
    </div>
    )
  }
}

export default ChuckBar;