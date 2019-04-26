import React, { Component } from "react";
import './Bannerstore.css'
import { Link } from 'react-router-dom'

class Bannerstore extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}

  }

  render() {
      
    return (
      <div className="banner_store">
      <div className="pic_of_chuck_store">
      <img src="https://i.imgur.com/kLMGuxm.png" alt="picture_chuck"></img>
      </div>
      <div className="text_ban_store">
      <p className="loremchuck">Chuck Norris n'est pas égal à lui même, il est meilleur. Achètes donc des goodies Chuck Norris pour tenter de l'égaler !</p>
      <a href="/Shop" Target="_blank" className="button_store" title="Achèèètes"><Link to="/Shop" />Choppe Chuck <span class="icon-play"><i class="fas fa-chevron-circle-right"></i></span></a>
      </div>
      </div>
    );
  }
}

export default Bannerstore;


{/* <img className="dollars" src="https://cdn.pixabay.com/photo/2016/10/25/18/49/money-1769716__340.png" alt="dollars" /> */}