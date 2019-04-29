import React from 'react';
import '../components/Story.css';
import quizz from './quizz.json'
import DisplayGame from './DisplayGame'


const datarep1 = quizz.map(toto=> toto.id)
console.log(datarep1)

function gameQuest(data){
    return data.map(toto => {
        
        return (<DisplayGame 
            toto={toto}
        /> )
      })
}

const Story = () => {
    return (
        gameQuest(quizz)
    )

}
export default Story;