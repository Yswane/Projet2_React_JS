import React, { Component } from 'react';

import images from '../Images/Bulle-chuck.png';

import './ApiQuotesChuck.css';





class ApiQuotesChuck extends Component {

  constructor(props) {

    super(props);

    this.state = {

      items: []

      

    };

  }

  handleClick = () => {

    this.randomChuckFact()

  }



  randomChuckFact = () =>{

    const proxyurl = "https://cors-anywhere.herokuapp.com/"

    const url = 'https://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1'

    fetch(proxyurl + url)

    .then(res => res.json())

    .then(res => {

    this.setState({

      items: res

    });

  })

  }



  componentDidMount() {

    this.randomChuckFact()

  }

           

  render() {

    const { items } = this.state

      return (

        <>

         <div className="DivChuckApi">

             <img className="chuckImageApi" src="http://image.noelshack.com/fichiers/2019/15/1/1554746475-big-bend-national-park-1584082-1920.jpg" alt="Chuck fact"></img>

        </div>

      {items.map(item => (

        <div className="ApiFact" key={item.id}>

        <p>{item.fact}</p> 

        </div>

      ))}

      <div className="DivApiImage">

        <img className="ImagesChuckApi" src= {images} alt="blague dans une bulle"></img>

      </div>

      <button onClick={this.handleClick}className="ButtonApiPageChuck">Suite </button>

      </>

  );

}

}



export default ApiQuotesChuck;