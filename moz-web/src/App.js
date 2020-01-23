import React, { Component } from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import './App.css';
import fire from './components/Events/firebase';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import Events from './components/Events/Events';
import MemberLogin from './components/MemberLogin';
import UploadEvent from './components/UploadEvent';
import ImgUpload from './components/ImageUpload';
import Gallery from './components/Gallery';

class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
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

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* <br/> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/About' component={AboutUs} />
          <Route path='/Contact' component={ContactUs} />
          <Route path='/events' component={Events} />
          <Route path='/img' component={ImgUpload} />
          <Route path='/Gallery' component={Gallery} />
          <div>{this.state.user ?  (<Route path='/admin' component={UploadEvent} />) : (<Route path='/login' component={MemberLogin} />)}</div>
        </Switch>
        <br/>
        <br/>
        <Footer/>
      </div>
      </BrowserRouter>
    );

  }
}

export default App;
