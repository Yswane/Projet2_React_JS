import React, { Component } from 'react';
import Bannerstore from './Bannerstore';


class Primary extends Component {
  render() {
    return (
      <>
        <title>Le site de Chuck Norris</title>

        <body>          
          <header>

            {/* NavBar */}
            <div>
              <h1>NavBar</h1>
            </div>
          </header>
          <br />
          <br />
          <br />
          <br />


{/* Citation API + video */}
          <div>
            <h1>Citation API + video</h1>
          </div>
          <br />
          <br />
          <br />
          <br />



{/* Bannière Chuck */}
          <div>
            <h1>Bannière Chuck</h1>
          </div>
          <br />
          <br />
          <br />
          <br />



{/* Jeux/Quiz interactif */}
          <div>
            <h1>Jeux/Quiz interactif</h1>
          </div>
          <br />
          <br />
          <br />
          <br />

          <div>
            <h1>Shop</h1>
            <Bannerstore />
          </div>
          <br />
          <br />
          <br />
          <br />


{/* Bas de page */}
          <footer>
            <h1>Bas de page</h1>
          </footer>
        </body>
      </>
    );
  }
}

export default Primary;
