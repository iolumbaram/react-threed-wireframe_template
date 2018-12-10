import React, { Component } from 'react';
import './App.css';
// import DemoScene from './components/DemoScene';
// import  GrapesjsEditor from "./components/Library/Grapesjs.js";
import  GrapesjsEditor from "./components/DemoScene/Grapesjs.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GrapesjsEditor/>
      </div>
    );
  }
}

export default App;
