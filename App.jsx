import React from "react";
import {Addition, Subtraction , Multiplication, Division } from "./Calculator";

function App()
{
    return (<>
           Sum: <Addition/>, 
           Sub:<Subtraction/>, 
           Mult: <Multiplication/>, 
           Div: <Division/>
             </>

);
}
export default App;