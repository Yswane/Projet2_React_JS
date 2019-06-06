import React from 'react';


const ButtonGame1 = (props) => {
  const empty = props.res.rep1.text
  if (empty.length === 0) {
    return ""
  } else {
    return (
      <>
        <a className="button-quizz" href="javascript:void" onClick={props.handleChangeData}>
          <p>{props.res.rep1.text} </p>
        </a>
      </>
    )
  }
}

export default ButtonGame1




