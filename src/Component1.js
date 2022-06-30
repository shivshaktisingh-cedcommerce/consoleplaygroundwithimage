import React from "react";

import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

class Component1 extends React.Component {
    render(){
        return(
            <div id="component1">
              <Component2/> 
              <Component3/>
              <Component4/>

            </div>
            
           
            
        )
    }
}
export default Component1;