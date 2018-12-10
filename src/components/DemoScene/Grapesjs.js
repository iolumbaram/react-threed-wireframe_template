import React, { Component } from 'react';
// import './grapes.min.css';
// import GrapesIndex from 'grapesjs';
import ReactDOM from 'react-dom';
// import DemoScene from './DemoScene';
// import DemoScene from './index.js';

class GrapesEditor extends Component {
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(){
        return false
    }
    componentDidMount(){
        const editor = grapesjs.init({
            container : '#gjs',
            components: '<div class="txt-red">Hello world!</div>',
            style: '.txt-red{color: red}',
        });
    }
    render() {
        return (
            <div id ='gjs'></div>
        );
    }
}


export default GrapesEditor;