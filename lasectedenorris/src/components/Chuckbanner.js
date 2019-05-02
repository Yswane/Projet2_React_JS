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
      <p>Chuck Norris est devenu malgré lui un meme sur Internet. De très nombreux aphorismes humoristiques, les « Chuck Norris Facts », lui attribuent en effet des qualités surhumaines, caricaturant les héros forts et virils qu'il a interprétés au cinéma et à la télévision. Ces courts énoncés de ses hauts faits vont même jusqu'à présenter comme évidente la supériorité de Chuck Norris sur Dieu (par exemple : « Dieu a dit : "Que la lumière soit !" et Chuck Norris a répondu : "On dit : s'il vous plait !" »). Les thèmes abordés sont très variés, et certains ensembles de facts font référence à des connaissances pointues, ayant généralement été conçus par des étudiants spécialisés dans la discipline correspondante. </p>
      <a href="/Chuck" Target="_blank" className="button-primary1" title="Learn More"><Link to="/Chuck" />Chuck facts <span className="icon-play"><i className="fas fa-chevron-circle-right"></i></span></a>
      </div>
      </div>
    );
  }
}

export default Chuckbanner;
