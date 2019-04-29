import React from 'react'

const DisplayGame = ({ toto}) => {
    console.log(toto);
    
    return (
        <div>
            <h1>{toto.Quest}</h1>
            <img src={toto.image} />
            <ul>
                {/* <li>{toto.rep1.text}</li>
                <li>{toto.rep2.text}</li>
                <li>{toto.rep3.text}</li> */}
            </ul>
        </div>
    )
}

export default DisplayGame;