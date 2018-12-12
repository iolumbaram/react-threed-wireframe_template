import React, { Component } from 'react';
// import './grapes.min.css';
// import GrapesIndex from 'grapesjs';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom'
// import DemoScene from './DemoScene';
// import DemoScene from './index.js';
import Childtest from './Childtest.js';

class GrapesEditor extends Component {
    constructor(props){
        super(props);

        this.state = { 
            value: 'gjs',
            valhtml: null 
        }
        // this.focusTextInput = this.focusTextInput.bind(this);
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
        // var el2 = ReactDOM.findDOMNode(this.refs.ref2);
        // this.setState('gracias')
        // focusTextInput(this.refs.el1)

        // this.setState({value: "12312"});

        //   console.log("done "+this.state.value)


        //   this.setState({value: this.refs.el1}, function () {
        //     console.log(this.state.value);
        // });

        // console.log(ReactDOM.findDOMNode(this).getAttribute("id"))
        console.log("#gjs component mounted")
          this.setState({value: ReactDOM.findDOMNode(this).getAttribute("id")}, function () {
            console.log("props @ parents " +this.state.value);
            console.log("parent ref " +this.refs.el1)
            console.log(findDOMNode(this.refs.el1))
        });
        this.setState({valhtml: findDOMNode(this.refs.el1)}, function () {
            console.log("refs @ parents " +this.state.valhtml)
        });
    }

    // focusTextInput(somedmo) {
    //     this.setState(state => ({
    //         cola: somedmo
    //       }));
    //   }

    // componentDidUpdate(){
    //     console.log("done "+this.state.value)
    // }

    render() {
        return (
            <div id ='gjs' ref='el1'>
                <Childtest pvalue={this.state.valhtml}/>
            </div>
        );
    }
}

class ChildAnimated extends React.Component {
    
    componentWillAppear(callback){}
  
    componentDidMount(){
    //   const { parent, child } = this.props.node();
    //   console.log({parent, child});
      // Console return 
      // {
      // parent: div,
      // child: null
      // }
    }
    
    render(){
      return(
        <h1>LALALLAL</h1>
      )
    }
  }
export default GrapesEditor;

