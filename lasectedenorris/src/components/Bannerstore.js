import React, { Component } from "react";
import './Bannerstore.css'


class Bannerstore extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}

  }

  render() {
      
    return (
      <div className="banner">
      <div className="pic_of_chuck">
      <img src="https://i.imgur.com/kLMGuxm.png" alt="picture_chuck"></img>
      </div>
      <div className="text_ban">
      <p>Chuck Norris drives an ice cream truck covered in human skulls. Chuck Norris does not sleep. He waits. Sleeping beauty was sleeping because of being rejected by Chuck Norris, the real referenced "true prince." Chuck Norris was once on the Price is Right, and the price was wrong Chuck Norris does not get frostbite. Chuck Norris bites frost. Chuck Norris does not sleep. He waits. A Handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there Chuck Norris can lead a horse to water AND make it drink, What was going through the minds of all of Chuck Norris' victims before they died? His shoe. </p>
      <a href="https://chucknorris.com/christian/" Target="_blank" class="button-primary" title="Learn More">Choppe Chuck <span class="icon-play"><i class="fas fa-chevron-circle-right"></i></span></a>
      </div>
      </div>
    );
  }
}

export default Bannerstore;