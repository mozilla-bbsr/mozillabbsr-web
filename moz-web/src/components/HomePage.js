import React from 'react';
import Typing, { Cursor } from 'react-typing-animation';
import LazyHero from 'react-lazy-hero';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import $ from 'jquery';
import adobe from '../assets/adobe.png'
import angular from '../assets/angular.png'
import java from '../assets/java.png'
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import js from '../assets/js.png';
import logo from '../assets/logo-footer.png'

import event1 from '../assets/Events/1.jpg';
import event2 from '../assets/Events/2.jpg';
import event3 from '../assets/Events/3.jpg';
import event4 from '../assets/Events/4.jpg';
import event5 from '../assets/Events/5.jpg';




const AnimatedTypingComponent = () => (
  <Typing speed={50}>
    <span id="mozilla-typing-text">Welcome to Mozilla BBSR</span>
    <Cursor />
  </Typing>
);

const cardStyle = {
  width: '18rem'
}

class HomePage extends React.Component {

  lazyheroStyle = {
    // 'margin-top': '25vh',
    // 'margin-left': '10vh'
  };

  componentDidMount() {

    var radius = 80; // adjust to move out items in and out 
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
    'margin-top': '15vh',
    'margin-left': '22%'
  };

  rotatingLogo = {
    'height': '50px',
    'width': '50px'
  };

  render() {
    return (
      // <div className="home">
      <div>
        <br/> <br/> <br/>
        {/* <div className="hero-side-by-side"> */}
          <div class="row">
          <div class="col-sm-5 col-lg-10 text-center">
          <LazyHero style={this.lazyheroStyle} imageSrc={logo}  isCentered={true}>
            {AnimatedTypingComponent()}
          </LazyHero>
     

          </div>
          {/* <div class="col-sm-2 text-center"> */}
          {/* <div style={this.rotatingIconsStyle} id="container">
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
            
          </div> */}
          {/* </div> */}
          </div>
          {/* </div> */}


          <div class="bg-light">
                <div class="container py-5">             
                    <div class="col-lg-12">
                    <h1 class="mainheading" style={{ textAlign: 'center' }}> Events</h1>
                    <p class="lead text-muted mb-0"><center> Mozilla BBSR Club regularly organises workshops, technical talks and discussions.</center></p>  
                    <br/>
                      <OwlCarousel className="owl-theme" 
                                stagePadding={200}
                                loop 
                                margin={10} 
                                items={1}
                                nav
                                autoplayHoverPause
                                autoplay
                                autoplayTimeout={1000}
                                responsive={{
                                  0:{
                                      items:1,
                                      stagePadding: 60
                                  },
                                  600:{
                                      items:1,
                                      stagePadding: 100
                                  },
                                  1000:{
                                      items:1,
                                      stagePadding: 200
                                  },
                                  1200:{
                                      items:1,
                                      stagePadding: 250
                                  },
                                  1400:{
                                      items:1,
                                      stagePadding: 300
                                  },
                                  1600:{
                                      items:1,
                                      stagePadding: 350
                                  },
                                  1800:{
                                      items:1,
                                      stagePadding: 400
                                }}
                              }
                               >
                        <div class="col-sm-8  mx-auto"><img src={event1}/></div>
                        <div class="col-sm-8  mx-auto"><img src={event2}/></div>
                        <div class="col-sm-8  mx-auto"><img src={event3}/></div>
                        <div class="col-sm-8  mx-auto"><img src={event4}/></div>
                      <div class="col-sm-8  mx-auto"><img src={event5}/></div>             </OwlCarousel>
          </div>          
        </div>
      </div>

            <div class="bg-white py-5">
                <div class="container-fluid">             
                <div class="col-lg-12">
                    <h1 class="mainheading" style={{ textAlign: 'center' }}> Services</h1>
                    <p class="lead text-muted mb-0"><center>We develop websites for different clubs and associations within our instituion. We also provide technical support.</center></p>
                    <br/>
                    <div class="row text-center">
                      <div class="col-md-3 col-sm-6 col-md-2">
                      <div class="grid">
                      <figure class="effect-chico">
                        <img src="https://pixabay.com/static/uploads/photo/2015/10/22/17/32/smoke-1001664_960_720.png"  alt="img04"/>
                        <figcaption>
                          <h2> <span>Web</span></h2>
                          <p>Websites promote you 24/7: No employee will do that.</p>
                          <a href="#">View more</a>
                        </figcaption>			
                      </figure>
		                    </div>
                      </div>
                      <div class="col-md-3 col-sm-6 col-md-2">
                      <div class="grid">
                        <figure class="effect-chico">
                          <img src="https://pixabay.com/static/uploads/photo/2015/09/09/06/54/sisters-931151_960_720.jpg"  alt="img15"/>
                          <figcaption>
                            <h2> <span>Workshops</span></h2>
                            <p>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                            <a href="#">View more</a>
                          </figcaption>			
                        </figure>
		                    </div>
                      </div>
                      <div class="col-md-3 col-sm-6 col-md-2">
                      <div class="grid">
                      <figure class="effect-chico">
                        <img src="https://pixabay.com/static/uploads/photo/2015/10/22/17/32/smoke-1001664_960_720.png"  alt="img04"/>
                        <figcaption>
                          <h2> <span>Training</span></h2>
                          <p>In learning you will teach, and in teaching you will learn.</p>
                          <a href="#">View more</a>
                        </figcaption>			
                      </figure>
		                    </div>
                      </div>
                      <div class="col-md-3 col-sm-6 col-md-2">
                      <div class="grid">
                        <figure class="effect-chico">
                          <img src="https://pixabay.com/static/uploads/photo/2015/09/09/06/54/sisters-931151_960_720.jpg"   alt="img15"/>
                          <figcaption>
                            <h2> <span>Projects</span></h2>
                            <p>Every project is an opportunity to learn, to figure out problems to invent and reinvent.</p>
                            <a href="#">View more</a>
                          </figcaption>			
                        </figure>
		                    </div>
                      </div>
                    </div>
                </div>          
            </div>
          </div>
         
        
      </div>
    );
  }
}

export default HomePage;