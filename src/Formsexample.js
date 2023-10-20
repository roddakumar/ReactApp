import React, { Component } from 'react'

export default class Formsexample extends Component {
constructor(props) {
  super(props)

  this.state = {
     userName:'',
     dropDown:''
  }
}

setUSername = event =>
{
    this.setState({userName:event.target.value});
    console.log(this.state.userName);
}

setDropDown = event =>
{
    this.setState({dropDown:event.target.value});
}

handleSubmit = event =>{
alert(`${this.state.userName} ${this.state.dropDown}`);
event.preventDefault();
}

  render() {
    const {userName,dropDown} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label> UserName : <input type='text' value={userName} onChange={this.setUSername}></input></label><br></br>
          <label>dropDown:
            <select value={dropDown} onChange={this.setDropDown}>
                <option value=''></option>
                <option value='react'>React</option>
                <option value='Angular'>Angular</option>
            </select>
          </label> <br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
