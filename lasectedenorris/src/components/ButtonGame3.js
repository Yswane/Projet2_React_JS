import React from 'react';

const ButtonGame3 = (props) => {
    const empty = props.res.rep3.text
    if ( empty.length === 0 ) {
        return ""
    } else {
        return (
            <>    
                    <a className="button-quizz" href="javascript:void(0);" onClick={props.handleChangeData}>
                        <p>{props.res.rep3.text} </p>
                    </a>
            </>
        )
    }    
}

export default ButtonGame3




