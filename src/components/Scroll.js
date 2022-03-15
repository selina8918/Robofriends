import React from "react";
const Scroll =(props) =>{
    return(
    //  to use style in jsx we have to use double curle bracket
     <div style ={{overflowY:'scroll', border:'2px solid black',height:'800px'}}>
          {props.children}
     </div>
    );
};
export default Scroll;