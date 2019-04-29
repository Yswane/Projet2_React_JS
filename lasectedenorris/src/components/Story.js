import React from 'react';
import '../components/Story.css';
import quizz from './quizz.json'
import DisplayGame from './DisplayGame'


const datarep1 = quizz.map(toto=> toto.rep1)
console.log(datarep1)

function gameQuest(data){
    return data.map(toto => {
        return (<DisplayGame 
            quest={toto.Quest}
            image={toto.image} 
            rep1={toto.rep1} />)
      })
}

const Story = () => {
    return (
        gameQuest(quizz)
    )

}
export default Story;