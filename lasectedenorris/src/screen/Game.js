import React, { Component } from 'react';
import './Home.css'
import './Game.css'
import Basegame from '../components/Basegame'
import Story from '../components/Story'
import ButtonChuckTop from '../components/ButtonChuckTop'


import quiz from '../components/quizz.json'


class Game extends Component {
    state = {
        data: quiz[0]
    }



test = () => {
    console.log(this.data[0])
}


    render() {
        return (
            <>
                <title>Page Game</title>

                <body>
                   {/* <Basegame /> */}
                    <Story test={this.test}/>
                    <ButtonChuckTop />
                </body>
            </>
        );
    }
}


export default Game;