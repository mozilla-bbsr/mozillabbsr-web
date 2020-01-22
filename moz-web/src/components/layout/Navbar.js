import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/home.css';
import fire from '../Events/firebase';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
}

componentDidMount() {
  this.authListener();
}

authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      localStorage.removeItem('user');
    }
  });
}

  logout() {
      fire.auth().signOut();
  }

  render() {
       return (
          <nav class="navbar navbar-custom navbar-expand-lg navbar-dark  py-3">
            <div class="container"><a href="#" class="navbar-brand d-flex align-items-center"><img src="https://www.mozilla.org/media/protocol/img/logos/mozilla/black.40d1af88c248.svg"></img></a>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto ">

                  <li class="nav-item ">
                  <Link to='/' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>  Home   </Link>    
                  </li> 
                  <li class="nav-item ">
                  <Link to='/About' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>  About   </Link>    
                  </li> 
                  <li class="nav-item ">
                  <Link to='/events' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>  Events   </Link>    
                  </li>             
                  <li class="nav-item ">
                  <Link to='/Gallery' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>  Gallery   </Link>    
                  </li> 
                  <li class="nav-item ">
                  <Link to='/Contact' className='nav-link  text-center text-white'style={{ fontFamily: 'sans-serif' }}>  Contact   </Link>    
                  </li> 
                  
                  <div>{                  
                        this.state.user ?  
                        <div>
                           <ul class="navbar-nav ">
                        <li class="nav-item">
                        <Link to='/admin' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>Add Event
                        </Link> 
                        </li>
                        <li class="nav-item">
                        <Link to='/img' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>Upload Photos
                        </Link> 
                        </li>
                        <li class="nav-item ">
                          <div className='nav-link text-center text-dark' style={{ fontFamily: 'sans-serif' }}><a href="/" className='text-white' onClick={this.logout}>Logout</a></div>
                        </li> 
                        </ul>
                        </div>
                                  : 
                        <Link to='/login' className='nav-link text-center text-white'style={{ fontFamily: 'sans-serif' }}>  Member's Login   </Link>          
                  }                  
                  </div>         
                 

                </ul>
              </div>
            </div>
          </nav>

  )
}
}

export default Navbar;
