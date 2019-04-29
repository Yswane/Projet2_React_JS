import React, { Component } from 'react';
import './VideoHome.css'
import { Link } from 'react-router-dom';
// import ReactPlayer from 'react-player'



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








// class VideoHome extends Component {

//     render() {
//         const vid = document.getElementsByClassName("vidchuck");
//         vid.onEnded = function () {
//             alert("the video has ended");
//         };
//         return <div className="vidchuck">

//             <ReactPlayer url='https://chucknorris.com/assets/themes/chuck-norris/videos/chucknorris.mp4' width='100%' height='100%' playing />

//         </div>


//     }
// }

// export default VideoHome