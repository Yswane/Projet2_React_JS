import React, { Component } from "react"


import res from './quizz.json'

class Content extends Component {
    state = {
        data:{},
    }

getContent = () => {
    this.setState({ data: res.id})
    
}
componentDidMount() {
    this.getContent()
}

render() {
    const {
        id,
        Quest,
        image,
        rep1,
        rep2,
        rep3
    } = this.state.data
    return (
        <div>
            <p>{id}</p>
            <p>{Quest}</p>
            <img src={image} alt={Quest}></img>
            <p>{rep1}</p>
            <p>{rep2}</p>
            <p>{rep3}</p>
        </div>
    )
}
}


export default Content