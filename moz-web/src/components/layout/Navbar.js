import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/home.css';

const Navbar = () => {
       return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div class="container"><a href="#" class="navbar-brand d-flex align-items-center"><img src="https://www.mozilla.org/media/protocol/img/logos/mozilla/black.40d1af88c248.svg"></img></a>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">

                  <li class="nav-item ">
                  <Link to='/' className='nav-link text-dark'style={{ fontFamily: 'sans-serif' }}>  Home   </Link>    
                  </li> 
                  <li class="nav-item ">
                  <Link to='/About' className='nav-link text-dark'style={{ fontFamily: 'sans-serif' }}>  About   </Link>    
                  </li> 
                  <li class="nav-item ">
                  <Link to='/events' className='nav-link text-dark'style={{ fontFamily: 'sans-serif' }}>  Events   </Link>    
                  </li>             
                  <li class="nav-item ">
                  <Link to='/Gallery' className='nav-link text-dark'style={{ fontFamily: 'sans-serif' }}>  Gallery   </Link>    
                  </li> 
                  <li class="nav-item ">
                  <Link to='/Contact' className='nav-link text-dark'style={{ fontFamily: 'sans-serif' }}>  Contact   </Link>    
                  </li> 

                </ul>
              </div>
            </div>
          </nav>

  )
}

export default Navbar;