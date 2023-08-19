
import React from "react";        // if we wanna use jsx we need to import React module 
import ReactDom  from "react-dom";


//note : only remove multiline comment of piece of code to see how piece of code works 
//single line comments are comments for understandilbilty


/*
//we had rendered single element then multiple elements used jsx , javascript , pure react , react fragment

// now we are going to use javascript Expression  basically we use curly braces for expressions and variables in jsx
// you cannt use if else or condition inside {} in jsx 

const greeting ="Radhey Radhey"
ReactDom.render(
<>
<h1>{greeting}</h1>

<p>thi year is {2000+23}</p>

<p>{Math.random()}</p>            

</>
, document.getElementById('root'))

*/

const fname ="suman"
const lname ="laraee"
/*

// we are gonna use ES6 template litral 
//method 1 :
ReactDom.render(<h1>my name is {fname} {lname}</h1>, document.getElementById('root'))
*/

/*
// we are gonna use ES6 template litral 
//method 2 :
ReactDom.render(<h1>my name is {fname +" "+lname}</h1>, document.getElementById('root'))
*/

// we are gonna use ES6 template litral 
//method 3 :
ReactDom.render(<h1>{`hi my name is ${fname } ${lname}`}</h1>, document.getElementById('root'))
