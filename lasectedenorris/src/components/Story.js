import React from 'react';
import "../Style.css"

import '../Style.css'
import ButtonChuckTop from '../components/ButtonChuckTop';
import '../components/Story.css';


const Story = (props) => {
    return (
        <>
            <div className="muscle"></div>
            <div className="container-quizz">
                <div className="box-question">
                    <img className="illus" alt='' src={props.res.image}></img>
                    <iframe src={props.res.video} frameborder="0" className="video-quizz" title='quizz' allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="question">{props.res.Quest}</p>
                </div>
            </div>
            <ButtonChuckTop />
        </>
    )
}

export default Story;