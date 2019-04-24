import React, { Component } from 'react';
import './Walkertexas.css'


class Walkertexas extends Component {
    render() {
        return (
            <div className="background_video_walker">
                <iframe  className="video_walker" title="3" src="https://www.youtube.com/embed/1NuIfInlBII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        );
    }
}

export default Walkertexas
