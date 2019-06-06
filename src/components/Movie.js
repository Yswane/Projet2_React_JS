import React from 'react';


const Movie = (props) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image wave-effect waves-block waves-light">
          {
            props.image == null ? <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/17wxW17DcQQfgMvJ7pWXrdNG6QY.jpg`} alt="card" style={{ width: "100%", height: "360" }} /> : <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card" style={{ width: "100%", height: "360" }} />
          }
        </div>
      </div>
    </div>
  )
}

export default Movie;