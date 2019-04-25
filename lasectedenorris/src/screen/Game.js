import React, { Component } from 'react';
import './Home.css'
import './Game.css'
import Basegame from '../components/Basegame'
import Story from '../components/Story'
import Button_Chuck_Top from '../components/Button_Chuck_Top'

class Game extends Component {
    render() {
        return (
            <>
                <title>Page Game</title>

                <body>
                    
                   {/* <Basegame /> */}
                   <Story />
                   <Button_Chuck_Top />
                </body>
            </>
        );
    }
}


export default Game;