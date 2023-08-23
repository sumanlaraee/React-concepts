import React from "react"
import ReactDom from "react-dom";
import x , {cast , fname} from "./App"


// here are going to learn about Es6 export import 



ReactDom.render(<> 
<ol>
    <li>
        {x}
    </li>
    <li>{cast}</li>
    <li>{fname()}</li>
</ol>
</>, document.getElementById("root"));
