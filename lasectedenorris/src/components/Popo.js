import React from 'react'

import quizz from './quizz.json'

const Popo = () => {
    return(
        <div>{quizz.map(item => <p>{item.id}</p>)}</div>
    )
}

export default Popo