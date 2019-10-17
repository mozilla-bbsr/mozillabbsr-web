import React from 'react';
import Typing, { Cursor } from 'react-typing-animation';
import LazyHero from 'react-lazy-hero';
import $ from 'jquery';
import adobe from '../assets/adobe.png'
import angular from '../assets/angular.png'
import java from '../assets/java.png'
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import js from '../assets/js.png';


const AnimatedTypingComponent = () => (
  <Typing speed={50}>
    <span id="mozilla-typing-text">Mozilla Club Bbsr</span>
    <Cursor />
  </Typing>
);

const cardStyle = {
  width: '18rem'
}

class HomePage extends React.Component {

  lazyheroStyle = {
    'margin-top': '25vh',
    'margin-left': '10vh'
  };

  componentDidMount() {
    var radius = 100; // adjust to move out items in and out 
    var fields = $('.item'),
      container = $('#container'),
      width = container.width(),
      height = container.height();
    var angle = 0,
      step = (2 * Math.PI) / fields.length;
    fields.each(function() {
      var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
      var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
      if (window.console) {
        console.log($(this).text(), x, y);
      }
      $(this).css({
        left: x + 'px',
        top: y + 'px'
      });
      angle += step;
    });
  }

  rotatingIconsStyle = {
    'margin-top': '25vh',
    'margin-left': '60%'
  };

  rotatingLogo = {
    'height': '50px',
    'width': '50px'
  };

  render() {
    return (
      <div className="home">
        <div className="hero-side-by-side">
          <LazyHero style={this.lazyheroStyle} imageSrc="../public/mozbbsr.jpeg" isCentered={false}>
            {AnimatedTypingComponent()}
          </LazyHero>
          <div style={this.rotatingIconsStyle} id="container">
            <div class="item">
              <img style={this.rotatingLogo} src={adobe} alt={"Adobe"} />
            </div>
            <div class="item">
              <img style={this.rotatingLogo} src={java} alt={"Java"} />
            </div>
            <div class="item">
              <img style={this.rotatingLogo} src={python} alt={"Python"} />
            </div>
            <div class="item">
              <img style={this.rotatingLogo} src={cpp} alt={"C++"} />
            </div>
            
          </div>
          </div>
      </div>
    );
  }
}

export default HomePage;