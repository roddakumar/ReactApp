import React, { Component } from "react";

class Exampleforclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      count: 0,
    };
  }
  Update = () => {
    this.setState(prevState =>({ name: "New Name", count: prevState.count + 1 })); 
    // if we use this.state.count +1 and call the  callfivetime it increments to 1 instead 5 because
    //this example is react call multiple setstatements on single call below is example for that
   //this.callfivetime.bind is eventbinding if we use arrow function bind is not required
  };

  
  callfivetime = () =>{
    
    this.Update();
    this.Update();
    this.Update();
    this.Update();
    this.Update();
    
  }

  render() {
    return (
      <div>
        {this.state.name} <h4>states can be changed</h4>
        {this.state.count} <br></br>
        <button onClick={this.Update}>click</button> <br></br>
        <button onClick={this.callfivetime.bind(this)}>click increment 5 times : {this.state.count}</button> 
        
      </div>
    );
  }
}

export default Exampleforclass;
