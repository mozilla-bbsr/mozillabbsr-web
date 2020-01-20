import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
       return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div class="container"><a href="#" class="navbar-brand d-flex align-items-center"><img src="https://www.mozilla.org/media/protocol/img/logos/mozilla/black.40d1af88c248.svg"></img></a>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active"><a href="/" class="nav-link font-italic"> Home </a></li>
                  <li class="nav-item active"><a href="/About" class="nav-link font-italic"> About </a></li>
                  <li class="nav-item active"><a href="/events" class="nav-link font-italic"> Events </a></li>
                  <li class="nav-item active"><a href="#" class="nav-link font-italic"> Gallery </a></li>
                  <li class="nav-item active"><a href="/contact" class="nav-link font-italic"> Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>

  )
}

export default Navbar;