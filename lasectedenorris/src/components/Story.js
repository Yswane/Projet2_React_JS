import React, { Component } from "react"
import { Link } from "react-router-dom"

import res from '../components/quizz.json'
import './Story.css';

class Story extends Component {
    state = {
        data: res[0]
    }


    getAnswer = () => {
        const result = this.state.data
        this.setState({ data: res[0] })
    }
    componentDidMount() {
        this.getAnswer()
    }


    render() {
        return (
            <>
                <div className="container-quizz">
                    <div className="box-question">
                    {/* <p>{this.state.data.id}</p> */}
                        <p className="question">{this.state.data.Quest}</p>
                    </div>
                    <img className="illus" src={this.state.data.image}></img>
                    {/* <p>{this.state.data.rep1.id} </p> */}
                <div className="box-button">  
                    <p className="button-quizz"><Link to="/this.state.data.id2">{this.state.data.rep1.text} </Link></p>
                    <p className="button-quizz">{this.state.data.rep2.text}</p>
                    <p className="button-quizz">{this.state.data.rep3.text}</p>
                </div>      
            </div>
            </>
        )
    }
}

export default Story




// render() {
//     console.log(this.state.data)
//     return (
//         <>
//         <input type="submit" onClick={this.getAnswer} />
//             {this.state.data.map(a => {
//                 let url = `/Games/${a.id}`
//                 return (
//                     <p key={a.id}>
//                     <Link to={url}>{a.quest}</Link>
//                     {a.Quest}
//                     </p>
//                     )
//             })}
//         </>
//     )
// }
// }