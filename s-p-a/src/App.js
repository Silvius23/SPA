import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './About';
import Navbar from './Navbar';
// import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
  super()
  this.state = {page:{label:"home", hash:"home"},};
  window.location.href="#/" + this.state.page.hash
}


render(){
  return(
    <div className='app'>
      <Navbar state ={this.state}/>
      {this.state.page.label === "home" && <Home />}
      {this.state.page.label === "about" && <About />}
    </div>
    )
  }
}

export default App;
