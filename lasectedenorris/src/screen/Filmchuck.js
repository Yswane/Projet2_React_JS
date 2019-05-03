import React from 'react'
import Searcharea from '../components/Searcharea'
import MovieList from '../components/MovieList'
import ButtonChuckTop from '../components/ButtonChuckTop';

import './Filmchuck.css'


class Filmchuck extends React.Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchTerm: ''
        }
        this.apiKey = process.env.REACT_APP_API
    }

handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data =>data.json())
    .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results]})

    })

}

handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
}
  
  render() {
              
      return (
        
          <body className="background-chuck">
            <div className="container">
                <div className="chuck_movie">
                    <img src="https://image.noelshack.com/fichiers/2019/15/7/1555247101-chuck-pic-1.jpg" alt="chuck icon"/>      
                    <tr className="film"/>
                        <h1>Chuck Norris</h1>
                        <p>Carlos Ray "Chuck" Norris (né le 10 mars 1940) est un artiste martial et acteur américain. Après avoir servi dans l’armée de l’air américaine, il a commencé à se faire connaître comme artiste martial et a depuis fondé sa propre école, Chun Kuk Do. À la suite de son image de "dur à cuire", un phénomène Internet a commencé en 2005, connu sous le nom de Chuck Norris Facts, attribuant à Norris divers exploits infaillibles, voire impossibles. Norris est apparu dans un certain nombre de films d'action, comme Way of the Dragon, dans lequel il a joué aux côtés de Bruce Lee et a été la vedette du groupe Cannon dans les années 1980. Il a ensuite joué le rôle principal dans la série télévisée Walker, Texas Ranger de 1993 à 2001… </p>
                    <div className="info_chuck">
                      <h4>Informations personnelles</h4>
                        <p>Acteur</p>
                        <p>Apparitions connues: 63</p>
                        <p>Né le 10/03/1940</p>
                    </div>
                </div>
                
                <h4>Filmographie</h4>
            <Searcharea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MovieList movies={this.state.movies}/>
            </div>
            <div>
                  <ButtonChuckTop />
            </div>

        
        </body> 
    
      )
  
}
}
export default Filmchuck

