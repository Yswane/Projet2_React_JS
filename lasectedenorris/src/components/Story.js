import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ButtonChuckTop from '../components/ButtonChuckTop';
import '../components/Story.css';

class Story extends Component {
    state = {
        story : {}
    }
getStory = async () => {
    const id = this.props.id
    const result = await axios.get (
        `quizz.json`)
        console.log (result)
    // this.setState({story})
}

componentDidMount() {
    this.getStory()
}

render() {

    const { id, question, image, reponse} = this.state.story

    return (
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
    )
    }
}
 

export default Story;