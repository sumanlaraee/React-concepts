import React from "react";
import {Addition, Subtraction , Multiplication, Division } from "./Calculator";

function App()
{
    return (<>
          <ol>
            <li>Sum :{Addition(40,4)}</li>
            <li>Sub:{Subtraction(40,4)}</li>
            <li> Mult:{Multiplication(40,4)}</li>
            <li>Division: {Division(40,4)}</li>

          </ol>
             </>

);
}
export default App;