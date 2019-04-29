import React from 'react'

const DisplayGame = ({ id, quest, image, rep1, rep2, rep3 }) => {
    return (
        <div>
            <h1>{quest}</h1>
            <img src={image} />
            <ul>
                <li>{rep1.id}</li>
                <li>{rep2.id}</li>
                <li>{rep3.id}</li>
            </ul>
        </div>
    )
}

export default DisplayGame;