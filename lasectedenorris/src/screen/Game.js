import React, { Component } from 'react';
import './Home.css'
import './Game.css'
import Basegame from '../components/Basegame'
import Story from '../components/Story'
import ButtonChuckTop from '../components/ButtonChuckTop'

class Game extends Component {
    render() {
        return (
            <>
                <title>Page Game</title>

                <body>
                    
                   {/* <Basegame /> */}
                   <Story />
                   <ButtonChuckTop />
                </body>
            </>
        );
    }
}


export default Game;