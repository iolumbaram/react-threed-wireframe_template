import React, { Component } from 'react';
// import './grapes.min.css';
// import GrapesIndex from 'grapesjs';
import ReactDOM from 'react-dom';
// import DemoScene from './DemoScene';
import DemoScene from './index.js';

class GrapesEditor extends Component {
    constructor(props){
        super(props);
        this.myRef = this.myRef.bind(this)
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
        var el1 = this.refs.el1;
        var el2 = ReactDOM.findDOMNode(this.refs.ref2);
        console.log("el1 "+ el1 )
        console.log("el2 "+ el2 )
        
    }
    render() {
        return (
            <div id ='gjs' ref='el1'><DemoScene ref={this.myRef}/></div>
        );
    }
}


export default GrapesEditor;