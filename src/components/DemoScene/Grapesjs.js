import React, { Component } from 'react';
// import './grapes.min.css';
// import GrapesIndex from 'grapesjs';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom'
// import DemoScene from './DemoScene';
// import DemoScene from './index.js';
// import Childtest from './Childtest.js';
// import GrapesjsIndex from '../Grapesjs-lib/countdown_index.js'
import loadComponents from '../Grapesjs-lib/components';
import loadBlocks from '../Grapesjs-lib/blocks';
import {
  countdownRef
} from '../Grapesjs-lib/consts';

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
            script: newPlugin(),
            plugins: ['gjs-component-countdown']
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
            // <div id ='gjs' ref='el1'>
            //     <Childtest pvalue={this.state.valhtml}/>
            // </div>
            // <div><GrapesjsIndex/></div>
            <div id ='gjs'>elllo</div>
        );
    }
}
function newPlugin(){
    grapesjs.plugins.add('gjs-component-countdown', (editor, opts = {}) => {
        let c = opts;
      
        let defaults = {
          blocks: [countdownRef],
          defaultStyle: true,
          startTime: '',
          endText: 'EXPIRED',
          dateInputType: 'date',
          countdownClsPfx: 'countdown',
          labelCountdown: 'Countdown',
          labelCountdownCategory: 'Extra',
          labelDays: 'days',
          labelHours: 'hours',
          labelMinutes: 'minutes',
          labelSeconds: 'seconds',
        };
        for (let name in defaults) {
            if (!(name in c))
            c[name] = defaults[name];
        }
        loadComponents(editor, c);
        loadBlocks(editor, c);
    })
    // console.log("hello")
}


// class ChildAnimated extends React.Component {
    
//     componentWillAppear(callback){}
  
//     componentDidMount(){
//     //   const { parent, child } = this.props.node();
//     //   console.log({parent, child});
//       // Console return 
//       // {
//       // parent: div,
//       // child: null
//       // }
//     }
    
//     render(){
//       return(
//         <div>lalalal</div>
//       )
//     }
//   }
export default GrapesEditor;

