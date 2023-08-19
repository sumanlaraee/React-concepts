
import React from "react";        // if we wanna use jsx we need to import React module 
import ReactDom  from "react-dom";


//note : only remove multiline comment of piece of code to see how piece of code works 
//single line comments are comments for understandilbilty


//uptill now we have understood about rendering single element like <h1>
//n0w we are rendering multilple elements so in jsx we have to enclose all tags in one div 
//b/c it take only one single elemnt

/*
//method 1:
ReactDom.render(<div>
  <h1>hello suman laraee</h1><p>hope you are doing well</p>
</div>, document.getElementById('root'))

*/

/*

//method 2: (it only works if your react version is greater tha 16 => check version into pkg.json )
// use comma after element as we use in array

ReactDom.render(
  [
  <h1>are you suman?</h1>,
  <p>if yes then please come in </p>]
  ,document.getElementById("root")
);

*/



