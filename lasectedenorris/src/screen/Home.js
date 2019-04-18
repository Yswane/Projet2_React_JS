import React, { Component } from 'react';

import './Home.css';
import Bannerstore from '../components/Bannerstore';
import ButtonChuckTop from '../components/Button_Chuck_Top';
import Chuckbanner from '../components/Chuckbanner';
import Bannergame from '../components/Banniergame';
import Walkertexas from '../components/Walkertexas';


class Home extends Component {
  render() {
    return (
      <>
        <title>Le site de Chuck Norris</title>

        <body>
          <div className="body">

            {/* Citation API + video */}
            <div className="videoWalker">
              <Walkertexas />
             
            </div>
    
            {/* Bannière Chuck */}
            <div className="bannerChuck">
              <Chuckbanner />
            </div>

            {/* Jeux/Quiz interactif */}
            <div className="bannerGame">
              <Bannergame />
            </div>

            {/* Shop banner */}
            <div className="bannerStore">
              <Bannerstore />
            </div>

            {/* bouton chuck qui permet de retourner en haut de la page*/}
            <div>
              <ButtonChuckTop />
            </div>
          </div>
          {/* Bas de page */}
        </body>
      </>
    );
  }
}

export default Home;
