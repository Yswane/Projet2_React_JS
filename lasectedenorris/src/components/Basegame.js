import React, {Component} from 'react';
import {BrowserRouter,Switch, Link} from 'react-router-dom'
import ButtonChuckTop from '../components/ButtonChuckTop';
import quizz from './quizz.json'


import './BaseGame.css'

class Basegame extends Component {
    render(){
        return(
            <div>
                <div className="container-quizz">
                    <div className="box-question">
                        <h1> Chuck Challenge </h1>
                        <p>Bienvenue sur le challenge le plus dur de votre vie. Tentez de survivre à l'aventure, sachez que chaque choix sera d'une importance capitale pour la suite de l'histoire. Profitez de l'experience à fin alternative. </p>
                        <img src="https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg" alt="chuck accueil" />
                        <p className="question-quizz">Etes Vous Pret ?</p>
                    </div>
                    <div className ="box-button">
                        <Link exact to="/1" className="button-quizz">  Oui</Link>
                        <Link exact to="/3" className="button-quizz"> Je me suis trompé d'endroit, je m'excuse</Link>
                        <Link exact to="/29" className="button-quizz"> Surprise</Link>
                    </div>
               </div>
               <ButtonChuckTop/>
            </div>
        )
    }
}

export default Basegame;