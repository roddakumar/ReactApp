import React from "react";


// Destructuring props and state nothing but extract the data into variable fro prop or state
// example const {variable1, variable2} = this.prop or this.state


const Firstfunction = (props) => {
  return (
    <div>
      first function {props.name} <h4>props are immutable</h4>
    </div>
  );
};

export default Firstfunction;
