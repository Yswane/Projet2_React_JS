import React from 'react';

import { Link } from 'react-router-dom';
import '../Style.css'
import ButtonChuckTop from '../components/ButtonChuckTop';
import '../components/Story.css';


const Story = (props) => {
        return (
                <>
                        <div className="container-quizz">
                            <div className="box-question">
                            
                                <img className="illus" src={props.res.image}></img>
                                <p className="question">{props.res.Quest}</p>
                                </div>


                                

                            </div>
                        <iframe src={props.res.video} frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <ButtonChuckTop />
                </>
        )
}

export default Story;