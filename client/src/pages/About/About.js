import React, { Component } from "react";
import "./About.css";



class About extends Component {

  componentDidMount() {
    document.body.classList.add("background-white");
}

componentWillUnmount() {
    document.body.classList.remove("background-white");
}

  render(){
    return(
      <div className="about-page-wrapper">
       <div className="row">
        <div className="col s5 m5">
          <h1 className="about-title">Our Motto:</h1>
          <h2 className="about-motto">Lorem Ipsum</h2>
          <p>
            Candy cookie cookie chocolate bar toffee bonbon jujubes. Chupa chups jujubes marshmallow halvah oat cake icing cupcake lollipop soufflé. 
          </p>
          <p>
            Chocolate bar cupcake chocolate macaroon. Tart ice cream toffee halvah chupa chups ice cream. Bonbon danish chupa chups pudding bonbon. Fruitcake apple pie pie gummies liquorice. Pudding pudding donut icing gummi bears soufflé tootsie roll bear claw. Oat cake caramels sesame snaps croissant bonbon pie tiramisu biscuit. Muffin wafer donut. Cotton candy fruitcake cotton candy. Tart biscuit gummies icing chocolate brownie. Caramels marzipan tiramisu.
          </p>
        </div>
        <div className="col m7">
          <div className="background-image-collage">
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col m4">
        <img className="idea" src ="/images/idea.png"/>
        <p className="about-text">Take tidbits of knowledge</p>
        </div>
        <div className="col m4">
        <img className="share" src ="/images/share.png"/>
        <p className="about-text">Share it with others</p>
        </div>
        <div className="col m4">
        <img className="heart" src ="/images/heart.png"/>
        <p className="about-text">Make the world a better place</p>
        </div>
      </div>

      </div>
    );
  };
};

export default About;