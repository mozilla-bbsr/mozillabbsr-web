import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' />
        <Route path='/About' component={AboutUs} />
        <Route path='/Contact' component={ContactUs} />
      </Switch>
      <br/>
      <br/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
