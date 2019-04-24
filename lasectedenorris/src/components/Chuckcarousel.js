import React from "react";
import './Chuckcarousel.css';

const Chuckcarousel = ({ picture, picture1, picture2, picture3 }) => {
  return <div id="slider">
    <figure>
      <img src={picture} alt={picture} />
      <img src={picture1} alt={picture} />
      <img src={picture2} alt={picture} />
      <img src={picture3} alt={picture} />
     
    </figure>
  </div>

};



export default Chuckcarousel;



// origine :
// return <div className="slider">
//     <div className="slides">
//       <div className="slide">
//         <img src={picture} alt={picture} />
//         <img src={picture1} alt={picture} />
//         <img src={picture2} alt={picture} />
//         <img src={picture3} alt={picture} />
//       </div>
//     </div>
//   </div>


// modif 1

// return <div id="slider">
//     <figure>
//       <img src="{picture}" alt={picture} />
//       <img src="{picture1}" alt={picture} />
//       <img src="{picture2}" alt={picture} />
//       <img src="{picture3}" alt={picture} />
//     </figure>
//   </div>

// };