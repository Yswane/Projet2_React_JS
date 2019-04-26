import React from 'react'
import Quete from './Quete'
import quizz from './quizz.json'

const datarep1 = quizz.map(toto=> toto.rep1)
// const datarep2 = quizz.map(toto=> toto.rep2)
// const datarep3 = quizz.map(toto=> toto.rep3)

// const textRep1 = datarep1.map(wesh=> wesh.text)

console.log(datarep1)
// console.log(textRep1)


function createTravel(data){
    return data.map(toto => {
        return <Quete 
        quest={toto.Quest} 
        photo={toto.image}
        rep1={toto.rep1} 
        />
    })
}


const Travels = () =>{
    return(createTravel(quizz))
}


export default Travels