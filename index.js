import React from "react";
import ReactDom from "react-dom";
import Sdata from "./Sdata"
function Card(props)
{
    return(<>
        <div className="cards">
  
  <div className="card">
  <img src={props.imgsrc}/>
    <span className="card__catogery">{props.tiltle}</span>
    <h5 className="card-title">{props.heading}</h5>
    
    <button><a href={props.link} target="_blank">Watch now</a></button>
  </div>
  </div>

    </>)
    
}
ReactDom.render(
<>
 <h1>Top five series of Netflix</h1>
  <Card imgsrc ={Sdata[0].imgsrc}title="A netflix origional series " heading="DArk"
    link="https://www.netflix.com/pk/title/80100172"
     />



<Card
  imgsrc={Sdata[1].imgsrc}

 tiltle={Sdata[1].tiltle}
 heading={Sdata[1].heading}

    link={Sdata[1].link}

/>



<Card

imgsrc={Sdata[2].imgsrc}

tiltle={Sdata[2].tiltle}
heading={Sdata[2].heading}

   link={Sdata[2].link}
/>
</>, document.getElementById("root"))