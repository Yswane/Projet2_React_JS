import React, { Component } from 'react';
import images from '../Images/Bulle-chuck.png';
import './ApiQuotesChuck.css';





class ApiQuotesChuck extends Component {
  state = {
    items: []
  };

  // le texte 'origine n'est pas propre, alors on le corrige.
  nettoyage = (a) => {
    a = a.replace(/&egrave;/gi, "è");
    a = a.replace(/&ecirc;/gi, "ê");
    a = a.replace(/&eacute;/gi, "é");
    a = a.replace(/&euml;/gi, "ë");
    a = a.replace(/&agrave;/gi, "à");
    a = a.replace(/&icirc;/gi, "î");
    a = a.replace(/&iuml;/gi, "ï");
    a = a.replace(/&#039;/gi, "'");
    a = a.replace(/&quot;/gi, '"');
    a = a.replace(/&deg;/gi, "°");
    a = a.replace(/&ccedil;/gi, "ç");
    a = a.replace(/&acirc;/gi, "â");
    a = a.replace(/&laquo;/gi, "«");
    a = a.replace(/&raquo;/gi, "»");
    a = a.replace(/&ugrave;/gi, "ù");
    a = a.replace(/&ocirc;/gi, "ô");
    a = a.replace(/&ucirc;/gi, "û");
    a = a.replace(/&ouml;/gi, "ö");
    a = a.replace(/\?/gi, "'");
    a = a.replace(/<br \/>/gi, "");
    return a;
  }

  handleClick = () => {
    this.randomChuckFact()
  }

  randomChuckFact = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = 'https://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1'
    fetch(proxyurl + url)
      .then(res => res.json())
      .then(res => (this.nettoyage(res[0].fact)))
      .then(res => {
        this.setState({
          items: res
        })
      })
  }

  componentDidMount() {
    this.randomChuckFact()
  }

  render() {
    const { items } = this.state
    return (
      <>
        <div className="DivChuckApi">
          <img className="chuckImageApi" src="http://image.noelshack.com/fichiers/2019/15/1/1554746475-big-bend-national-park-1584082-1920.jpg" alt="Chuck fact"></img>
        </div>
        <div className="ApiFact">
          {items}
        </div>
        <div className="DivApiImage">
          <img className="ImagesChuckApi" src={images} alt="blague dans une bulle"></img>
        </div>
        <button onClick={this.handleClick} className="ButtonApiPageChuck">Suite </button>
      </>
    );
  }
}



export default ApiQuotesChuck;