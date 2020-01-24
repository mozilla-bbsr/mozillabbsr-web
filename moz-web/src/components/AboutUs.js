import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Logo from '../assets/logo-footer.png';
import Footer from '../components/layout/Footer'
 
// NOTE: if using fullpage extensions/plugins put them here and pass it as props

const divStyle = {
    background: 'background: #1d976c'

  };
 
const Fullpage = () => (
  <ReactFullpage  
 
    //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    // scrollingSpeed = {1000} /* Options here */
    // scrollHorizontally = {true}  /* Because we are using the extension */
    // scrollHorizontallyKey = {'YOUR KEY HERE'}
    // autoScrolling={false}
 
    render={({ state, fullpageApi }) => {

      return (

        <ReactFullpage.Wrapper>
          <div className="section">
              <br/><br/><br/> 
            <div class="bg-light">
                <div class="container py-5">
                <div class="row h-100 align-items-center py-5">
                    <div class="col-lg-6">
                    <h1 class="display-4">About Us</h1>
                    <p class="lead text-muted mb-0">Mozilla Clubs are a global network of community members that share Mozilla’s mission to ensure the Internet is a global public resource, open and accessible to all. Mozilla provides free training and resources to help clubs succeed and grow digital literacy in community spaces.Mozilla Club Bhubaneswar is a group of tech geeks who are eager to spred knowledge using powerful teaching tools.The tool can belong to any platform or be anything like website, an android app, a project with disruptive technology. It can also be a non-technical project like an activity or a game which helps in the process of teaching in a fun manner.</p>
                    
                    </div>
                    <div class="col-lg-6 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" /></div>
                </div>
                </div>
                </div>
          </div>

          
          <div className="section">
          <div class="bg-white py-5">
                <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                    <div class="col-lg-6">
                    <h2 class="font-weight-light">Why Mozilla Clubs?</h2>
                    <p class="font text-muted mb-4">Mozilla Clubs are a unique and personal way to teach the Web in local communities. They are made up of technologists, thinkers and builders working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of digital world. </p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                </div>
                </div>
                </div>           
          </div>

          <div className="section">
              <br/>
          <div class="bg-light py-4">
                <div class="container py-5">
                <div class="row mb-4">
                    <div class="col-lg-5">
                    <h2 class="display-5 font-weight-light">Features That Make Us Different</h2>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <i class="fa fa-user-circle-o"></i>
                        <h5 class="mb-0">Interest-based, peer-supported learning</h5>
                        <span class="small text-uppercase text-muted">
                        Club gatherings are hands-on, production-centered and social. Research shows learners are most engaged when they are working on projects they care about, and are with peers who support and encourage them.
                        </span>
                    </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <i class="fa fa-briefcase"></i>
                        <h5 class="mb-0">Curriculum that’s free, open and educator-tested</h5>
                        <span class="small text-uppercase text-muted">We offer a collection of resources and teaching activities that are free, open and remixable. Each is grounded in the Web Literacy Map and includes step-by-step instructions and tips for facilitation.</span>
                    </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <i class="fa fa-trophy"></i>
                        <h5 class="mb-0">Best practices and community mentorship</h5>
                        <span class="small text-uppercase text-muted">Club participants have access to best practices and mentorship from Mozilla community members around the world through our newsletters, community calls, public forums and growing list of resources.</span>
                    </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <i class="fa fa-book"></i>
                        <h5 class="mb-0">Regular engagement</h5>
                        <span class="small text-uppercase text-muted">We offer regular interactive events and teaching/learning activities that are free and open to all. This ensures that participants can regularly stay in touch with modern technologies and advance towards becoming a developer.</span>
                    </div>
                    </div>


                </div>
                </div>
                </div>

          </div>

          <div className="section" style={divStyle}>
          <div class="py-5" style={divStyle}>
                <div class="container py-5">
                <div class="row mb-4">
                    <div class="col-lg-5 justify-content-center align-items-center">
                    <h2 class="display-4 font-weight-light ">Mentors</h2>
                    <p class="font-italic text-muted">Our Mentors who have always provided us with support.</p>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Samaresh Mishra</h5><span class="small text-uppercase text-muted">Dean, SCE</span>
                        <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Sagar Pattnaik</h5><span class="small text-uppercase text-muted">Faculty Coordinator</span>
                        <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Kumar Devadutta</h5><span class="small text-uppercase text-muted">Sr. Faculty CS</span>
                        <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                        <h5 class="mb-0">Suman Bhattacharya</h5><span class="small text-uppercase text-muted">Director, CAAS</span>
                        <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    </div>              

                </div>
                </div>
                </div>
          </div>       
          <div className="section  fp-auto-height-responsive" style={{backgroundColor: '#000000'}}>             
              <br/><br/><br/>
              <Footer/>             
          </div>         
                 
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;



//SASHWAT CODE => WITHOUT FULLPAGE.JS


// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import ReactFullpage from '@fullpage/react-fullpage';

// const pluginWrapper = () => {
//     require('./statics/fullpage.scrollHorizontally.min');
//   };

// class AboutUs extends Component {

//     render(){
//        return (
//         //    <div>
//                <div id="fullpage">
//             <div class="section">
//                 <div class="bg-light">
//                 <div class="container py-5">
//                 <div class="row h-100 align-items-center py-5">
//                     <div class="col-lg-6">
//                     <h1 class="display-4">About Us</h1>
//                     <p class="lead text-muted mb-0">Mozilla Clubs are a global network of community members that share Mozilla’s mission to ensure the Internet is a global public resource, open and accessible to all. Mozilla provides free training and resources to help clubs succeed and grow digital literacy in community spaces.Mozilla Club Bhubaneswar is a group of tech geeks who are eager to spred knowledge using powerful teaching tools.The tool can belong to any platform or be anything like website, an android app, a project with disruptive technology. It can also be a non-technical project like an activity or a game which helps in the process of teaching in a fun manner.</p>
                    
//                     </div>
//                     <div class="col-lg-6 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" /></div>
//                 </div>
//                 </div>
//                 </div>
//             </div>

//                 <div class="bg-white py-5">
//                 <div class="container py-5">
//                 <div class="row align-items-center">
//                     <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
//                     <div class="col-lg-6">
//                     <h2 class="font-weight-light">Why Mozilla Clubs?</h2>
//                     <p class="font text-muted mb-4">Mozilla Clubs are a unique and personal way to teach the Web in local communities. They are made up of technologists, thinkers and builders working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of digital world. </p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
//                     </div>
//                 </div>
//                 </div>
//                 </div>


//                 <div class="bg-light py-5">
//                 <div class="container py-5">
//                 <div class="row mb-4">
//                     <div class="col-lg-5">
//                     <h2 class="display-4 font-weight-light">Features That Make Us Different</h2>
//                     </div>
//                 </div>
//                 <div class="row text-center">
//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-white rounded shadow-sm py-5 px-4">
//                     <i class="fa fa-user-circle-o"></i>
//                         <h5 class="mb-0">Interest-based, peer-supported learning</h5>
//                         <span class="small text-uppercase text-muted">
//                         Club gatherings are hands-on, production-centered and social. Research shows learners are most engaged when they are working on projects they care about, and are with peers who support and encourage them.
//                         </span>
//                     </div>
//                     </div>

//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-white rounded shadow-sm py-5 px-4">
//                     <i class="fa fa-briefcase"></i>
//                         <h5 class="mb-0">Curriculum that’s free, open and educator-tested</h5>
//                         <span class="small text-uppercase text-muted">We offer a collection of resources and teaching activities that are free, open and remixable. Each is grounded in the Web Literacy Map and includes step-by-step instructions and tips for facilitation.</span>
//                     </div>
//                     </div>

//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-white rounded shadow-sm py-5 px-4">
//                     <i class="fa fa-trophy"></i>
//                         <h5 class="mb-0">Best practices and community mentorship</h5>
//                         <span class="small text-uppercase text-muted">Club participants have access to best practices and mentorship from Mozilla community members around the world through our newsletters, community calls, public forums and growing list of resources.</span>
//                     </div>
//                     </div>

//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-white rounded shadow-sm py-5 px-4">
//                     <i class="fa fa-book"></i>
//                         <h5 class="mb-0">Regular engagement</h5>
//                         <span class="small text-uppercase text-muted">We offer regular interactive events and teaching/learning activities that are free and open to all. This ensures that participants can regularly stay in touch with modern technologies and advance towards becoming a developer.</span>
//                     </div>
//                     </div>


//                 </div>
//                 </div>
//                 </div>


//                 <div class="bg-white py-5">
//                 <div class="container py-5">
//                 <div class="row mb-4">
//                     <div class="col-lg-5 justify-content-center align-items-center">
//                     <h2 class="display-4 font-weight-light ">Mentors</h2>
//                     <p class="font-italic text-muted">Our Mentors who have always provided us with support.</p>
//                     </div>
//                 </div>

//                 <div class="row text-center">
//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
//                         <h5 class="mb-0">Samaresh Mishra</h5><span class="small text-uppercase text-muted">Dean, SCE</span>
//                         <ul class="social mb-0 list-inline mt-3">
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//                         </ul>
//                     </div>
//                     </div>

//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
//                         <h5 class="mb-0">Sagar Pattnaik</h5><span class="small text-uppercase text-muted">Faculty Coordinator</span>
//                         <ul class="social mb-0 list-inline mt-3">
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//                         </ul>
//                     </div>
//                     </div>

//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
//                         <h5 class="mb-0">Kumar Devadutta</h5><span class="small text-uppercase text-muted">Sr. Faculty CS</span>
//                         <ul class="social mb-0 list-inline mt-3">
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//                         </ul>
//                     </div>
//                     </div>

//                     <div class="col-xl-3 col-sm-6 mb-5">
//                     <div class="bg-light rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
//                         <h5 class="mb-0">Suman Bhattacharya</h5><span class="small text-uppercase text-muted">Director, CAAS</span>
//                         <ul class="social mb-0 list-inline mt-3">
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//                         <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//                         </ul>
//                     </div>
//                     </div>

//                 </div>
//                 </div>
//                 </div>
//                 </div>
//        )
//     }
// }
// export default AboutUs;