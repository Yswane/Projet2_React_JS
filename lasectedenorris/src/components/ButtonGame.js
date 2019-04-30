import React from 'react';

import ButtonChuckTop from '../components/ButtonChuckTop'

const ButtonGame1 = (props) => {
    return (
        <>

            <a href="javascript:void" onClick={props.handleChangeData}>
                <p>{props.res.rep1.text} </p>
            </a>
        </>
    )
}

export default ButtonGame1




