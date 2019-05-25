import React, { Component } from 'react';
import './VideoHome.css'
import { Link } from 'react-router-dom';



class VideoHome extends Component {
    render() {
        return (
            <>
                <div className="buttonClick">
                <Link to="/home"><button className="boutonIntro" type="button">Continuer vers le site</button></Link>
                </div>

                <video className="sizeVideo"  autoplay="autoplay" controls
                    source src="https://chucknorris.com/assets/themes/chuck-norris/videos/chucknorris.mp4" type="video/mp4">
                </video>
            </>
        )
    }
}

export default VideoHome