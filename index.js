
import React from "react";        // if we wanna use jsx we need to import React module 
import ReactDom  from "react-dom";


//note : only remove multiline comment of piece of code to see how piece of code works 
//single line comments are comments for understandilbilty

// in previous codes  we have seen we were using <div> to render multiple elements 
// when we use grid/ flexbox this extra div create problems so we use react fragment instead of div

//reat fragment <React.fragment><React.fragment/> or if version is 16+ use only <></>


ReactDom.render(
  <>
    <h1>hello miss suman laraee</h1>
    <p>i hope you are doing good </p>
  </>, document.getElementById('root')
)

