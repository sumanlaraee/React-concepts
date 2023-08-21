import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
// using css in react , importing css file in react  we will move to index.css 
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300"
const img3="https://picsum.photos/300/300"

// wehn we are using inline css we need to remmember js objects  
//change the case of properties from kebab to camel

const heading= {
  color: 'yellow',
  textTransform: 'capitalize',
  textAlign:"center", 
  textShadow:'0px 2px 4px #fb4476',
  fontWeight: 'bold',
  margin: '70px 0px' ,
  fontFamily: '"Chela One", cursive',
  }

ReactDom.render(
<>
<h1 /*style={ {
  color: 'yellow',
  textTransform: 'capitalize', textAlign:'center'}}*/  
    
    // you can also do this 
    style={heading}>{" "}hello my name is suman</h1>
<div className="img_div">
<img src={img1} alt="random img "></img>
<img src={img2} alt="random img "></img>
<img src={img3} alt="random img "></img>
</div>

</>
, document.getElementById("root"))







