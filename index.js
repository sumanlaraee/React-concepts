// using jsx in react    jsx=>javascript xml / javascript extension 
import React, { createElement } from "react";        // if we wanna use jsx we need to import React module 
import ReactDom  from "react-dom";


//note : only remove multiline comment of piece of code to see how piece of code works 
//single line comments are comments for understandilbilty


//there are three ways to render an element 

/*

//rendering with the help of jsx element 
ReactDom.render(<h1>hello hi how are you</h1>, document.getElementById('root'))

            //comments (<h1>hello hi how are you</h1> (this line is not html this is jsx ,
            // babel convert it into real react code))             
*/

/*

//rendering with pure react 

ReactDom.render(React.createElement('h1', null, 'hello suman'),
document.getElementById("root"))

//comments(we can do this entire code in one line with help of jsx and translated by bable, so no need to do this  ) 

*/

/*

// rendering with javascript only no need of bable 
var h1 = document.createElement('H1');
h1.innerHTML="hello suman laraee";
document.getElementById('root').appendChild(h1);

//there is a method appendchild we have to add element to root that we have created 

*/
