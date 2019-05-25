import React, { Component } from 'react';


class VideoHome extends Component {
    render() {
        return (
            <div>
                <video autoplay="autoplay"
                    source src="https://chucknorris.com/assets/themes/chuck-norris/videos/chucknorris.mp4" type="video/mp4">
                </video>
            </div>
        );
    }
}

export default VideoHome