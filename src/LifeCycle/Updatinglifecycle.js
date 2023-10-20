import React from 'react'

function Updatinglifecycle() {
  return (
    <div>
        <h1>Updatinglifecycle details:</h1><br></br>
        
       
         1. static getDerivedStateFromProps(props,state) (called every time when page is re rendered)
         <br></br>2 . shouldComponentUpdate(nextProp,nextState) <br></br>
         <br></br>3 . render <br></br>
         <br></br>4 . getSnapshotBeforeUpdate(prevProp,prevState) <br></br>
         4. componentDidUpdate (Called after  render is finished in re render cycle )
    </div>
  )
}

export default Updatinglifecycle