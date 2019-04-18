import React, { Component } from 'react';


class MovieRow extends Component {
    viewMovie(){
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
  
    render() {
      return <table className="tab_movie" key={this.props.movie.id}>
      <tbody className="film1">
        <tr>
          <td>
            <img alt="poster" src={this.props.movie.poster_src}/>
          </td>
          <td>
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input className="input_search"type="button" onClick={this.viewMovie.bind(this)} value="Voir"/>
          </td>
        </tr>
      </tbody>
    </table>
      
      
    }
  }
  

export default MovieRow
