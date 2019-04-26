import React from 'react'
import './Quete.css'

const Travel = ({id, quest, photo, rep1, rep2, rep3}) =>{

    return(
    <div className="quest">
        <h1>{quest}</h1>
        <img src={photo}/>
        <ul>
            {/* <li>{rep1}</li> */}
            <li></li>
            <li></li>
        </ul>
    </div>
    ) 
}

export default Travel