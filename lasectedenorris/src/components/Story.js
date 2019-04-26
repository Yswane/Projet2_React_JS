import React from 'react';
import '../components/Story.css';
import quizz from './quizz.json'
import displayGame from './displayGame'

function gameQuest(data){
    return data.map(toto => {
        return (<displayGame quest={toto.Quest} image={toto.image} />)
      })
}

const Story = () => {
    return (
        gameQuest(quizz)
    )

}
export default Story;