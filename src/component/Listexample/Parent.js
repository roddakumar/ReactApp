import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {

    arr =  [{id:1,name:'test 1',last:'test1 last name'},{id:1,name:'test 2',last:'test2 last name'}];

  render() {
    return (
      <div>{this.arr.map((p,index) =><Child key={index} name={p.name} last={p.last}/>)}</div>
    )
  }
}
