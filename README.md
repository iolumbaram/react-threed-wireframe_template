This project was bootstrapped with [Create React App]
https://github.com/toxicFork/react-three-renderer

attempt-f1: 
> render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.

>> pov1: how to get Div element from another component?


>Uncaught Error: _registerComponent(...): Target container is not a DOM element.
    at invariant 



<DemoScene ref={this.passRefover}/>
                <DemoScene eyeColor={'blue'}/>
                                <ChildAnimated pvalue={this.state.value}/>

https://github.com/artf/grapesjs/issues/1508
>> DomComponents
>> grapesjs-newsletter

Render a child components into anther DOM node using Portals
http://www.deadcoderising.com/react-16-render-a-child-component-into-another-dom-node-using-portals/
