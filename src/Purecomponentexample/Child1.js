import React, { Component } from 'react'

export default class Child1 extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           first:props.first
        }
      }
  render() {
    console.log('Child component');
    return (
      <div>Child1 {this.state.first}</div>
    )
  }
}
