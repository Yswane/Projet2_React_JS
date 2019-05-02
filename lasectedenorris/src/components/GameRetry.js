import React from 'react';
import "./GameRetry.css"



const GameRetry = (props) => {
    return (
        <>
            <div className="retryMode">
                <button className="retry" href="javascript:void" onClick={props.handleChangeRetry}>
                Ressusciter 
                </button>
            </div>
        </>
    )
}

export default GameRetry;
