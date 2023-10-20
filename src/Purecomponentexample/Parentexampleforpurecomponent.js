import React, { Component } from 'react'
import Child1 from './Child1'
import Purecomponent from './Purecomponent'
import Memocompforfunctions from './Memocompforfunctions'
export default class Parentexampleforpurecomponent extends Component {

  
//Pure component implemets shouldComponentupdate by performing shallow comparision while normal<br>
//component return true without comparing so component render every interval


constructor(props) {
  super(props)

  this.state = {
     first:'This is react'
  }
}
componentDidMount()
{
    setInterval(()=> {this.setState({first:'This is react'})},2000)
}
  render() {
    console.log('Parent component');
    return (
      <div><h1>{this.state.first}</h1>
      <Child1 first={this.state.first}/>
      <Purecomponent first={this.state.first}/>
      <Memocompforfunctions name={this.state.first}></Memocompforfunctions>
      </div>
    )
  }
}
