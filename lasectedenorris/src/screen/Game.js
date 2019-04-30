import React, { Component } from 'react';
import './Home.css'
import './Game.css'

import Story from '../components/Story'
import ButtonChuckTop from '../components/ButtonChuckTop'


import quizz from '../components/quizz.json'

import ButtonGame1 from '../components/ButtonGame';
import ButtonGame2 from '../components/ButtonGame2';
import ButtonGame3 from '../components/ButtonGame3';


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


    render() {
        return (
            <>
                <title>Page Game</title>
                <body>
                    <Story res={this.state.data} />

                    <ButtonGame1 res={this.state.data} handleChangeData={this.ChangeStory1} />

                    <ButtonGame2 res={this.state.data} handleChangeData={this.ChangeStory2} />
                    <ButtonGame3 res={this.state.data} handleChangeData={this.ChangeStory3} />

                    <ButtonChuckTop />
                </body>
            </>
        );
    }
}


export default Game;



// ChangeQuestion1 = () => {
//     this.setState({ data: quizz[1]})
// }

// ChangeQuestion2 = () => {
//     this.setState({ data: quiz2[2]})
// }

// ChangeQuestion3 = () => {
//     this.setState({ data: quiz2[3]})
// }





// test = () => {
//     let y = this.state.data3
//     console.log(y)
//     if (y) {
//         let b = 1
//         this.setState({ data: quiz2[b]})
//     }
//     // let idQuestion = y[i]
//     // let b = idQuestion.rep1.id
// }


// test1 = () => {
//     console.log(this.state.data2)
//     if ( this.state.data == quiz2[0] ) {
//         this.setState({ data: quiz2[1]})
//     }
// }
