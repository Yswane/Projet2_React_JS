import  React, { Component }   from  'react';
import sound from '../sound/Sound-P90.mp3'


class gunSound extends Component {
     
    state = { play: false };
    src = sound;
    audio = new Audio(this.src);  
    
        play = () => {
          this.setState({ play: this.state.play });
          console.log(this.audio);
          this.state.play = this.audio.play();
        }
    
    
    render(){
      
    return (
    
        <div>
        <button onClick={ this.play } ></button>
        </div>
    );
};
}

export  default  gunSound;