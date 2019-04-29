import React, { Component } from 'react';
import './Home.css'
import './Game.css'
import Story from '../components/Story'
import ButtonChuckTop from '../components/ButtonChuckTop'

class Game extends Component {
    render() {
        return (
            <>
                <title>Page Game</title>

                <body>
                    <Story />
                    <ButtonChuckTop />
                </body>
            </>
        );
    }
}


export default Game;