import React from 'react'
import { findDOMNode } from 'react-dom'
import ReactTransitionGroup from 'react-addons-transition-group'

class Parent extends React.Component {

  state = {
    isMounted: false
  };

  componentDidMount(){
    this.setState({
      isMounted: true,
      activeChild: false
    })
  }

  render(){
    const childArr = ['a','b','c','d','f','j'];
    return (
      <div ref={'parent'}>
        { childArr.map((child, index)=>(
          <span {...{
            key: index,
            ref: `child-${index}`,
            onClick: e=>this.setState({activeChild: index})
          }}>{child}</span>
        )) }

        <ReactTransitionGroup>
          { ( this.state.isMounted && this.state.activeChild !== false ) && (
            <ChildAnimated {...{
              key: 'child',
              nodes: ()=>({
                parent: findDOMNode(this.refs.parent),
                child: findDOMNode(this.refs[`child-${this.state.activeChild}`])
              })
            }}/>
          ) }
        </ReactTransitionGroup>
      </div>
    )
  }
}
class ChildAnimated extends React.Component {
    
    // componentWillAppear(callback){}
  
    componentDidMount(){
      const { parent, child } = this.props.nodes();
      console.log({parent, child});
      console.log(findDOMNode({parent}).parentNode.getAttribute("id"))
      // ReactDOM.findDOMNode(<ChildAnimated/>).getAttribute({parent})
      // Console return 
      // {
      // parent: div,
      // child: null
      // }
    }
    
    render(){
      return(
        <div>
            <h1>hello</h1>
            {}
        </div>
      )
    }
  }
export default Parent;
