import React from 'react'

function Mountingdetail() {
  return (
    <div>
        <h1>Mounting details:</h1><br></br>
        
        1 . constructor <br></br>
         2. static getDerivedStateFromProps(props,state) (
            When state of the component is depends on prop over period of time
            Example : when a propvalue is passed to child state value is depends on prop then we go with this method )
         <br></br>3 . render method <br></br>
         4. componentDidMount (Invoked after rendering component and it's childeren component is render into DOM)
    </div>
  )
}

export default Mountingdetail