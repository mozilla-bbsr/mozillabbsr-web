import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo-footer.png';

import event1 from '../../assets/Events/1.jpg';
// import event2 from '../assets/Events/2.jpg';
// import event3 from '../assets/Events/3.jpg';
// import event4 from '../assets/Events/4.jpg';
// import event5 from '../assets/Events/5.jpg';


import '../../assets/css/footer.css'

const Footer = () => {
  return (
    <div>
     <footer class="footer">
  <div class="container">
    <div class="row">
    <div class="col-sm-3">
            <h3 class="text-center font-weight-bold">Mozilla BBSR</h3>
            <br/>
            <div class="text-center">
                    <img src={Logo} class="mx-auto" height='200' />
            </div>
    </div>
   

     <br/>
      <div class="col-sm-2">
      <div class="footer-widget">
        <h3 class="text-center font-weight-bold">Site Map</h3>
        <div class="footer-widget-content">
          <div class="media">          
              <div class="media-body">
                    <Link to='/'><p class="text-center">Home</p></Link>
                    <Link to='/events'><p class="text-center">Events</p></Link>
                    <Link to='/contact'><p class="text-center">Contact Us</p></Link>
                    <Link to='/gallery'><p class="text-center">Gallery</p></Link>         
              </div>
           </div>
        </div>
        </div>
      </div>    
      <div class="col-sm-4 text-center">
      <h3 class="text-center font-weight-bold">Latest Events</h3>
      {/* <div class="footer-widget-content text-center">
          <div class="images-gellary ">
            <ul>                
              <li><a href="#"><img src={event1} width='200%' alt="Instagram 04"/></a></li>
              <li><a href="#"><img src={event1} width='200%' alt="Instagram 05"/></a></li>
              <li><a href="#"><img src={event1} width='200%' alt="Instagram 06"/></a></li>
            </ul>
          </div>
        </div> */}
     </div>  
     <br/> 
     <div class="col-sm-3 text-center">
        <div class="footer-widget">
          <h3 class="font-weight-bold">Stay in touch</h3>
          <div class="footer-widget-content">
          <ul className="list-unstyled">
                            <li> School Of Computer Engineering</li>
                            <li> KIIT University</li>
                            <li> Bhubaneswar, Odisha </li>
                        </ul>
            <a href="mailto:sales@example.com" class="contact-link">mozillabbsr@gmail.com</a>
            <a href="tel:0121234" class="contact-link">+91- 079799 44709</a>
            <div class="footer-social">
                <ul>
                <li><a href="https://www.facebook.com/mozillabbsr/"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter mr-3"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin mr-3"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube mr-3"></i></a></li>
                <li><a href="mailto:mozillabbsr@gmail.com?Subject=Hello"><i className="fa fa-envelope mr-3 " ></i></a></li>              
                </ul>
            </div>
          </div>
        </div>
      </div>   
      

    </div>
  </div>
</footer>
    </div>
  );
};

export default Footer;
