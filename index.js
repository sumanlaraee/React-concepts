import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
// using css in react , importing css file in react  we will move to index.css 
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300"
const img3="https://picsum.photos/300/300"
ReactDom.render(
<>
<h1 className="heading ">hello my name is suman</h1>
<div className="img_div">
<img src={img1} alt="random img "></img>
<img src={img2} alt="random img "></img>
<img src={img3} alt="random img "></img>
</div>

</>
, document.getElementById("root"))







