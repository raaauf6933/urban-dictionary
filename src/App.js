import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/input.scss'
import './assets/css/style.css'


import Header from "./components/Header";

class App extends Component {
  state = {  }
  render() { 
  
    return (
      <div>
        <Header/>
      </div>
    );
  }
}
 
export default App;
