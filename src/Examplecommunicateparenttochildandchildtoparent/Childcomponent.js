import React from 'react'
// Conditional Rendering is possible in react
function Childcomponent(prop) {
  return (
    <div>
        {prop.data}
        <button onClick={() => prop.methodparent('Im from child to parent')}>Click to pass data to parent</button>
    </div>
  )
}

export default Childcomponent