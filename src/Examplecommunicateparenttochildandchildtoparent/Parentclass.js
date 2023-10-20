import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentclass extends Component {
constructor(props) {
  super(props)

  this.state = {
     data:'This is parent data'
  }
}

passtoparent = (datafromchild) => {
    alert('Hey this data is from child ' + datafromchild);
}

  render() {
    return (
      <div><Childcomponent methodparent = {this.passtoparent} data={this.state.data}/></div>
    )
  }
}

export default Parentclass