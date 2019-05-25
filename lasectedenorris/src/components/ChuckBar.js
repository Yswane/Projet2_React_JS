import React, { Component } from 'react';
import './ChuckBar.css';
import { NavLink } from 'react-router-dom';


class ChuckBar extends Component {

  componentDidMount(){
    setTimeout(() => {
      const gars = document.querySelector('.passeur')
      gars.style.background='url()'
    }, 4500);
  }


  render() {
    return (
    <>        
        <header className="NavBarStart">
        
          <div className="Image-logo"><img src="https://s100.iracing.com/wp-content/uploads/2016/08/sticker375x360.u2.png" alt="logo de chuck"></img></div>
          <div className="main-nav-container">
            <ul className="Main-nav">
              <li><NavLink onClick={this.props.gunSound} exact to="/home"> Accueil</NavLink></li>
              <li><NavLink onClick={this.props.gunSound} exact to="/Shop"> Magasin </NavLink></li>
              <li className="LiImageChuck"> <NavLink onClick={this.props.gunSound} exact to="/"> <img  src="https://image.noelshack.com/fichiers/2019/14/3/1554323367-kisspng-globe-life-park-in-arlington-texas-rangers-texas-r-texas-rangers-5b0efe2ebf2f32-1568870215277092307831.png" alt=" de chuck"></img></NavLink></li>
              <li><NavLink onClick={this.props.gunSound} exact to="/Chuck"> Chuck Page </NavLink></li>
              <li><NavLink onClick={this.props.gunSound} exact to="/Game"> Jeu quizz </NavLink></li>
              <li className="LiImageChuck2"> <NavLink onClick={this.props.gunSound} exact to="/filmography"> <img  src="https://image.noelshack.com/fichiers/2019/18/4/1556799052-pistolet-chuck-start-filmo.png" alt=" de chuck"></img></NavLink></li>
            </ul>
          </div>
          <div className="passeur"></div>
        </header>
    </>
    )
  }
}

export default ChuckBar;