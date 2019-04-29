<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ButtonChuckTop from '../components/ButtonChuckTop';
>>>>>>> 6eb06ea5d596c93757c14b27a04c7f87bec239d4
import '../components/Story.css';
import quizz from './quizz.json'
import DisplayGame from './DisplayGame'


const datarep1 = quizz.map(toto=> toto.rep1)
console.log(datarep1)

function gameQuest(data){
    return data.map(toto => {
        return (<DisplayGame 
            quest={toto.Quest}
            image={toto.image} 
            rep1={toto.rep1} />)
      })
}

const Story = () => {
    return (
<<<<<<< HEAD
        gameQuest(quizz)
=======
        <>
        <ButtonChuckTop/>
         <div className="box-question">
    <img src="https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg" alt="chuck accueil" />

    <p className="question-quizz">Etes Vous Pret ?</p>

    <div className ="box-button">
                        <Link exact to="/id1" className="button-quizz">  Oui</Link>
                        <Link exact to="/id1" className="button-quizz"> Je me suis trompé d'endroit, je m'excuse</Link>
                        <Link exact to="/id32" className="button-quizz"> Surprise</Link>
                    </div>
                    </div>
        
        </>
>>>>>>> 6eb06ea5d596c93757c14b27a04c7f87bec239d4
    )

}
export default Story;