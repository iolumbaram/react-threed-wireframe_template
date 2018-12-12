class ChildAnimated extends React.Component {
    
    componentWillAppear(callback){}
  
    componentDidMount(){
      const { parent, child } = this.props.node();
      console.log({parent, child});
      // Console return 
      // {
      // parent: div,
      // child: null
      // }
    }
    
    render(){
      return(
        <div/>
      )
    }
  }