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
          <h2 className="about-motto">Gist Do It!</h2>
          <p className="about-body">
            "Get the Gist" is a labor of love.  TheDahlings are sincerely interested in sharing knowledge with the world.  
          </p>
          <p className="about-body">
          Industry professionals or novices have the chance to share tidbits of knowledge.  We all know how busy everyone is, but sometimes we just want to learn something new...quickly.  With "Get the Gist" an authenticated user has the power to not only view, but also contribute and comment on that knowledge.  
          </p>
          <p className="about-body">
          So what are you waiting for! Whether you have recently learned something, or you are a pro, sharing is caring with "Get the Gist".  
          </p>
        </div>
        <div className="col m7">
          <div className="background-image-collage">
          </div>
        </div>
      </div>

      <div className="row">
      <h1 className="about-page-work">How Does It Work?</h1>
          <div className="col m4">
            <img className="idea" src ="/images/idea.png"/>
            <p className="about-text about-body">Take tidbits of knowledge</p>
          </div>
          <div className="col m4">
            <img className="share" src ="/images/share.png"/>
            <p className="about-text about-body">Share it with others</p>
          </div>
          <div className="col m4">
            <img className="heart" src ="/images/heart.png"/>
            <p className="about-text about-body">Make the world a better place</p>
          </div>
      </div>

      <div className="row">
        <h1 className="about-page-meet">Meet TheDahlings</h1>
          <div className="col m3">
            <div className="card">
                <div className="card-image">
                  <img src ="/images/caleb.png"/>
                  <span className="card-title">Card Title</span>
                  <div class="card-content">
                <p className="about-body">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a className="dahling-title" href="https://c-sears.github.io/Portfolio/" target="_blank">Caleb Sears Portfolio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col m3">
            <div className="card">
                <div className="card-image">
                  <img src ="/images/nata.png"/>
                  <span className="card-title">Card Title</span>
                  <div class="card-content">
                <p className="about-body">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="https://nataliiafrank.github.io/" target="_blank">Nataliia Frank Portfolio</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col m3">
          <div className="card">
              <div className="card-image">
                <img id="kevin-pic" src ="/images/kevin.png"/>
                <span className="card-title">Card Title</span>
                <div class="card-content">
              <p className="about-body">I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="https://kevingodwin.herokuapp.com/" target="_blank">Kevin Godwin Portfolio</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col m3">
          <div className="card">
              <div className="card-image">
                <img  id="lydia-pic" src ="/images/lydia.png"/>
                <span className="card-title">Card Title</span>
                <div class="card-content">
              <p className="about-body">A creative spirit that sparks innovative light everywhere..like a fairy! </p> 
              <br></br>
              <p className="about-body">Fav quote: "If your dreams do not scare you, they are not big enough."</p>
            </div>
            <div className="card-action">
              <a href="https://lydiarachel.github.io/updated-portfolio/" target="_blank">Lydia Velasquez Portfolio</a>
            </div>
          </div>
        </div>
      </div>



      </div>

      </div>
    );
  };
};

export default About;