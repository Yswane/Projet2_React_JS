import React from "react";
import Chuckcarousel from './Chuckcarousel';
import  carrousel from './carrousel.json'
import './Gridchuck2.css';
import  './Chuckcarousel.css';


class Gridchuck extends React.Component {
  render() {
    return (
 
<div className="wrapper">

<div className="box1">
  <img src="https://media.giphy.com/media/l1J3G1bFnhwjxycYE/giphy.gif" alt="" className="media-gift-1" />
</div>

<div className="box2">
  <img src="http://www.jump-voyage.com/wp-content/uploads/2017/10/Texas-Paysage.jpg" alt=""
    className="media-picture-1" />
  </div>

<div className="box3">
  <iframe title="1" src="https://www.youtube.com/embed/LdVBkn6ohH8" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    className="media-video-1"></iframe>
  </div>

<div className="box4">
  <img src="http://media.coveringmedia.com/media/images/movies/2012/08/12/exp2_03a.jpg" alt=""
    className="media-picture-2" />
  </div>

  <div className="box5">
    {carrousel.map(carousel =>(
      <Chuckcarousel {...carousel}/>
    ))}
  </div>

<div className="box6">
  <img src="https://www.demotivateur.fr/images-buzz/cover/23405999656e1974f70c68_Untitled-2.jpg" alt=""
    className="media-picture-3" />
  </div>

<div className="box7">
  <img src="https://media.giphy.com/media/uUfbtweIW3A7S/giphy.gif" alt="" className="media-gift-2" />
</div>

<div className="box8">
  <img src="https://www.ladn.eu/wp-content/uploads/2018/01/chuck-norris-web-libre-640x360.jpg?v=1" alt=""
    className="media-picture-4" />
  </div>
   
<div class="box9">
  <iframe title="2" src="https://www.youtube.com/embed/oF0MVJnXUWo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    className="media-video-2"></iframe>
  </div>
</div>
    )}
};

export default Gridchuck;
