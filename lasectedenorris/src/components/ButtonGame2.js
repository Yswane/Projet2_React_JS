import React from 'react';

import ButtonChuckTop from '../components/ButtonChuckTop'


const ButtonGame2 = (props) => {
    return (
        <>

            <a href="javascript:void" onClick={props.handleChangeData}>
                <p>{props.res.rep2.text}</p>                
            </a>
        </>
    )
}

export default ButtonGame2




