import React, { Component } from 'react';
import './Home.css'
import './Game.css'
import Story from '../components/Story'
import ButtonChuckTop from '../components/ButtonChuckTop'

import quizz from '../components/quizz.json'

import ButtonGame1 from '../components/ButtonGame';
import ButtonGame2 from '../components/ButtonGame2';
import ButtonGame3 from '../components/ButtonGame3';
import GameRetry from '../components/GameRetry';


class Game extends Component {
    state = {
        data: quizz[0]
    }


ChangeStory1 = () => {
    let a = this.state.data
    let idRep = a.rep1.id - 1
    console.log(idRep)
    this.setState({ data: quizz[idRep] })
}

ChangeStory2 = () => {
    let a = this.state.data
    let idRep = a.rep2.id - 1
    console.log(idRep)
    this.setState({ data: quizz[idRep] })
}

ChangeStory3 = () => {
    let a = this.state.data
    let idRep = a.rep3.id - 1
    console.log(idRep)
    this.setState({ data: quizz[idRep] })
}


ChangeGameRetry = () => {
    this.setState({ data: quizz[0]})
}

// Invisible = () => {
    // let u = this.state.data
    // let textRep = u.rep1.text
// }




    render() {
        return (
            <>
                <title>Page Game</title>
                
                   
            
                    <Story res={this.state.data} />
                   
                    
                    <div className="box-button">
                    <ButtonGame1 res={this.state.data} handleChangeData={this.ChangeStory1} />
                    <ButtonGame2 res={this.state.data} handleChangeData={this.ChangeStory2} />
                    <ButtonGame3 res={this.state.data} handleChangeData={this.ChangeStory3} />
                    </div> 
                    <GameRetry handleChangeRetry={this.ChangeGameRetry}/>

                    
                    <ButtonChuckTop />
            
            </>
        );
    }
}


export default Game;