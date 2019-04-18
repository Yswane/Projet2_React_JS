import React, { Component } from 'react';
import Button_Chuck_Top from '../components/Button_Chuck_Top';
import MovieRow from '../components/MovieRow';
import $ from 'jquery'

import './Filmography.css'


class Filmography extends Component {
  constructor(props){ 
    super(props)

    this.state ={}
    //console.log("this is my initialiser");

    // const movies = [
    //   {id: 0, poster_src:"https://image.noelshack.com/fichiers/2019/15/7/1555250415-expendable.jpg", title:"Expandables 2 : unité spéciale", overview:"Les Expendables sont de retour et cette fois, c’est pour une affaire personnelle…"},
    //   {id: 1, poster_src:"https://image.tmdb.org/t/p/w150_and_h225_bestv2/xLHKbEnx6avWkxEIpkUiea54JWN.jpg", title:"La fureur du dragon", overview:"Un aubergiste, propriétaire d'un restaurant chinois est assailli par un promoteur qui veut l'obliger à vendre son établissement…"}

    // ]

    // let movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.id)
    //   const movieRow = <MovieRow movie={movie}/>
      
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows:  movieRows}

    this.performSearch("Chuck Norris")
  }

  performSearch(searchTerm){

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e59edc16a39691eaa185d6b7049ca9d4&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
       
        const results = searchResults.results

        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)

        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) =>{

        console.log("failed to fetch data")
        
      }
    })

  }

  searchChangeHandler(event){
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
    render() {
      return (
        <>
        <title>Le site de Chuck Norris</title>

        <body>
            <div className="body_film">
           
              <div className="chuck_movie">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://image.noelshack.com/fichiers/2019/15/7/1555247101-chuck-pic-1.jpg" alt="chuck icon"/>
                      </td >
                      <td className="film"/>
                      <td >
                        <h2>Filmographie Chuck Norris</h2>
                        <p>Carlos Ray "Chuck" Norris (né le 10 mars 1940) est un artiste martial et acteur américain. Après avoir servi dans l’armée de l’air américaine, il a commencé à se faire connaître comme artiste martial et a depuis fondé sa propre école, Chun Kuk Do. À la suite de son image de "dur à cuire", un phénomène Internet a commencé en 2005, connu sous le nom de Chuck Norris Facts, attribuant à Norris divers exploits infaillibles, voire impossibles. Norris est apparu dans un certain nombre de films d'action, comme Way of the Dragon, dans lequel il a joué aux côtés de Bruce Lee et a été la vedette du groupe Cannon dans les années 1980. Il a ensuite joué le rôle principal dans la série télévisée Walker, Texas Ranger de 1993 à 2001… </p>
                      </td>
                    </tr>
                    <div className="info_chuck">
                      <h3>Informations personnelles</h3>
                        <p>Acteur</p>
                        <p>Apparitions connues: 63</p>
                        <p>Né le 10/03/1940</p>
                    </div>

                  </tbody>
                </table>
                  <input onChange={this.searchChangeHandler.bind(this)} placeholder="Entrer une recherche" />

                  {this.state.rows}
                  

              </div>
              
              <div>
                  <Button_Chuck_Top />
              </div>
            </div>
        </body>

        </>
      );
    }
  }
  
 
  


export default Filmography
