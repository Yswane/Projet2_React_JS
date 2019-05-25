import React from 'react';


const ButtonGame2 = (props) => {
    const empty = props.res.rep2.text
    if (empty.length === 0) {
        return ""
    } else {
        return (
            <>
                <a className="button-quizz" href="javascript:void" onClick={props.handleChangeData}>
                    <p>{props.res.rep2.text} </p>
                </a>
            </>
        )
    }
}

export default ButtonGame2




