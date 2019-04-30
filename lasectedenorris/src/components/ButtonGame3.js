import React from 'react';

import ButtonChuckTop from '../components/ButtonChuckTop'

const ButtonGame3 = (props) => {
    return (
        <>

            <a href="javascript:void" onClick={props.handleChangeData}>
                <p>{props.res.rep3.text}</p>
            </a>
        </>
    )
}

export default ButtonGame3




