import React from 'react';

import { Link } from 'react-router-dom';
import ButtonChuckTop from '../components/ButtonChuckTop';
import '../components/Story.css';


const Story = (props) => {
        return (
                <>
                        <div className="container-quizz">
                        <div className="box-question">
                                <p className="question">{props.res.Quest}</p>
                                </div>
                                <img className="illus" src={props.res.image}></img>

                        </div>
                        <ButtonChuckTop />
                </>
        )
}

export default Story;