import React, { Component } from 'react'
import "./Counterfact.css"



class Counter extends Component{
    constructor(props) {

        super(props);
        // On initialise nos deux variables
        this.state = {
            isLiked     : false,
            isDisliked  : false,
            likeCounter: 0,
            dislikeCounter: 0
        }

    }

    // fonction appelée lors du clic sur l'élément "like"
    like = () =>
    {
        let likeCounter     = this.state.likeCounter;
        let dislikeCounter  = this.state.dislikeCounter;
    
        likeCounter     +=  !this.state.isLiked ? 1 : -1
        dislikeCounter  +=  this.state.isDisliked ? -1 : 0
    
        this.setState({
            isLiked         : !this.state.isLiked,
            isDisliked      : this.state.isDisliked ? !this.state.isDisliked : this.state.isDisliked,
            likeCounter     : likeCounter,
            dislikeCounter  : dislikeCounter
        })
    }

    // fonction appelée lors du clic sur l'élément "dislike"
    dislike = () =>
    {
        let likeCounter     = this.state.likeCounter;
        let dislikeCounter  = this.state.dislikeCounter;
    
        dislikeCounter  +=  !this.state.isDisliked ? 1 : -1
        likeCounter     +=  this.state.isLiked ? -1 : 0
    
        this.setState({
            isDisliked      : !this.state.isDisliked,
            isLiked         : this.state.isLiked ? !this.state.isLiked : this.state.isLiked,
            likeCounter     : likeCounter,
            dislikeCounter  : dislikeCounter
        })
    }

    componentDidMount () {

        const random = Math.floor(Math.random() * 99) + 1
        fetch('https://jsonplaceholder.typicode.com/posts/' + random)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataFromAPI : responseJson.body
                })
            })
            .catch((error) => {
                console.error(error);
            });
    
    }
    render() {

        // On définit les éléments "upIcon(like) et downIcon(dislike)"
        // on utilise ici Font-Answome (on inclura le fichier css dans ./public.index.html)
        let upIcon      = <img src="https://cdn.designcrowd.com/blog/2016/March/icons-vs-logos/FBLike-Icon_300_v2.png" aria-hidden="true" className='Up'></img>
        let downIcon    = <img src="https://publicdomainphotography.com/assets/cache/idOTU1NTQzZWZlOWNmZWYw-5d562b13e55b1d48b9afb5f33e03be09.jpg" aria-hidden="true" className='Down'></img>

        // Si l'on n'a pas encore "liké"
        if(!this.state.isLiked)
            upIcon = <img src="https://cdn.designcrowd.com/blog/2016/March/icons-vs-logos/FBLike-Icon_300_v2.png" aria-hidden="true" className='Up'></img>

        // Si l'on a pas encore "disliké"
        if(!this.state.isDisliked)
            downIcon = <img src="https://publicdomainphotography.com/assets/cache/idOTU1NTQzZWZlOWNmZWYw-5d562b13e55b1d48b9afb5f33e03be09.jpg" aria-hidden="true" className='Down'></img>


    return ( <>

<div id="container">
    <div className="facts">
        <div className="fact-description">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
        </div>    
        <div className='factLikeDislike' >
     {/* Au clic sur le bouton on appelle la fonction */}
        <button onClick={this.like}>{ upIcon } </button> <span>{ this.state.likeCounter }</span>
        <button onClick={this.dislike}>{ downIcon }</button> <span>{ this.state.dislikeCounter }</span>
        </div>
    </div>
</div>
   </> )
    }
}

export default Counter;