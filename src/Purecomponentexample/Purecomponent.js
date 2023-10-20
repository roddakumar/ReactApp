import React, { PureComponent } from 'react'

export class Purecomponent extends PureComponent {

    constructor(props) {
        super(props)
      
        this.state = {
           first:props.first
        }
      }

  render() {
    console.log('Pure component');
    return (
      <div>Purecomponent{this.state.first}
      <h5>ref and forwordref in react are use for access dom and used only for class component</h5>
      </div>
    )
  }
}

export default Purecomponent