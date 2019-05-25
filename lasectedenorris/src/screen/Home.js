import React, { Component } from 'react';

import './Home.css';
import '../Style.css';

import Bannerstore from '../components/Bannerstore';
import ButtonChuckTop from '../components/ButtonChuckTop';
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
            <section className="Introduction">
              <h1 className='titlehome'>Les facts sur Chuck Norris</h1>
              <hr className="bookends" />
              <p className='p-home'>Cet acteur apprécié des Geek est devenu culte grâce aux nombreux mèmes et facts dont il a fait l'objet</p>
              <p className='p-home'> Pour ceux qui se demandent d'où viennent les nombreux Chuck Norris facts, il semblerait qu'il y a quelques années, Chuck Norris a été invité sur un plateau de télévision. Lorsque le présentateur lui a dit" Merci d'avoir accepté notre invitation", Norris aurait répondu "Personne n'invite Chuck Norris".</p>
              <p className='p-home'>Cet air hautain lui a valu des blagues dans le monde entier.Ce site vous propose de recenser entièrement en français les Chuck Norris Facts qui foisonnent sur le web.</p>
              <hr className="bookends" />
            </section>

            {/* Citation API + video */}
            <section className="VideoWalker">
              <div className="videoWalker">
                <Walkertexas />
              </div>
            </section>

            {/* Bannière Chuck */}
            <section className="BannerChuck">
              <div className="bannerChuck">
                <Chuckbanner />
              </div>
            </section>


            {/* Jeux/Quiz interactif */}
            <section className="BannerGame">
              <div className="bannerGame">
                <Bannergame />
              </div>
            </section>

            {/* Shop banner */}
            <section className="BannerStore">
              <div className="bannerStore">
                <Bannerstore />
              </div>
            </section>

            {/* bouton chuck qui permet de retourner en haut de la page*/}
            <div>
              <ButtonChuckTop />
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Home;
