import React, { Component } from 'react'
import Mountingdetail from './Mountingdetail'
import Ummounting from './Ummounting'
import Updatinglifecycle from './Updatinglifecycle'
import Errorlifecycle from './Errorlifecycle'
//React.Fra gment is used when you don't want to use main div tag in component if you are using table data then table data should not apper in child this issue can be fixed bt reacr.fragment
export default class Mountinglifecycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         dropDownValue:''
      }
    }
    handleDropDown = event =>
    {
        this.setState({dropDownValue:event.target.value});
    }
  render() {
    return (
      <React.Fragment>
       <div> There are four categories in React LifeCycle 
        <br></br>
        1 . Mounting (when a instance of component  is being created  and inserted into the DOM) </div>
        <br></br>
        2. Updating (when a component is being rendered as a result of changes to either it's props or state) 
        <br></br>
        3. Unmounting (when a component is being removed from DOM)
        <br></br>
        4 . ErrorHandling (when there is error in rendering during life LifeCycle method or in child component)
        <br></br>
        Select Value to see full details on : 
         <select value={this.state.dropDownValue} onChange={this.handleDropDown}>
         <option></option>
         <option value='Mounting'>Mounting</option>
         <option value='Updating'>Updating</option>
         <option value='Unmounting'>Unmounting</option>
         <option value='ErrorHandling'>ErrorHandling</option></select>
        <br></br>
         {this.state.dropDownValue ==='Mounting' ?  <Mountingdetail/>:''}
         {this.state.dropDownValue ==='Updating' ?  <Updatinglifecycle/>:''}
         {this.state.dropDownValue ==='Unmounting' ?  <Ummounting/>:''}
         {this.state.dropDownValue ==='ErrorHandling' ?  <Errorlifecycle/>:''}
    </React.Fragment>
    )
  }
}
