import React, { Component } from 'react';
import './Home.css'
import './Game.css'
import Basegame from '../components/Basegame'

class Game extends Component {
    render() {
        return (
            <>
                <title>Page Game</title>

                <body>
                    
                   <Basegame />
                </body>
            </>
        );
    }
}


export default Game;