import React from 'react';

import { Link } from 'react-router-dom';
import ButtonChuckTop from '../components/ButtonChuckTop';
import '../components/Story.css';


const Story = (props) => {
        return (
                <>
                        <div>
                                <p>{props.res.id}</p>
                                <p>{props.res.Quest}</p>
                                <img src={props.res.image}></img>

                        </div>
                        <ButtonChuckTop />
                </>
        )
}

export default Story;









// <div className="box-question">
// <img src="https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg" alt="chuck accueil" />

// <p className="question-quizz">Etes Vous Pret ?</p>

// <div className="box-button">
//     <Link exact to="/id1" className="button-quizz">  Oui</Link>
//     <Link exact to="/id1" className="button-quizz"> Je me suis trompé d'endroit, je m'excuse</Link>
//     <Link exact to="/id32" className="button-quizz"> Surprise</Link>
// </div>
// </div>