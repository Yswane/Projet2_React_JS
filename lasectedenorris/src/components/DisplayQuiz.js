import React, { Component } from "react"
import Content from "./Content"

class DisplayQuiz extends Component {
    render() {
        return (
            <div>
                <Content id={this.props.match.params.id} />
            </div>
        )
    }
}

export default DisplayQuiz