import React from 'react'

const displayGame = ({ id, quest, image, rep1, rep2, rep3 }) => {
    return (
        <div>
            <h1>{quest}</h1>
            <img src={image} />
            <ul>
                <li>{rep1}</li>
                <li>{rep2}</li>
                <li>{rep3}</li>
            </ul>
        </div>
    )
}

export default displayGame;