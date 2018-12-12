import React from 'react';
// import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom'

class Childtest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      domRef: null
    };
    // this.setState({domRef:props.inputRef});
  }

  componentDidMount(props) {
    // pass the requested ref here
    // this.props.passRefUpward(this.refs);
    // console.log("component did mount " + this.props.pvalue)
    console.log(this.props.pvalue)
    // this.setState({domRef: this.props.pvalue}, function () {
    //   console.log("props @ child " +this.state.domRef);
    //   console.log(findDOMNode(this.state.domRef))
    //   // ReactDOM.createPortal(<Childtest/>, document.getElementById("gjs"));
    // });
  }    

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
      <div id="childid">
        <h1>hello, from the other siide</h1>
        <h1>{}</h1>
        </div>
    );
  }
}




export default Childtest;