import React, { memo } from 'react'
// memo are just like Purecomponent but for functions
const Memocompforfunctions = memo(({name}) => {
    console.log('In memo comp for function');
  return (
    
    <div>{name}</div>
  )
})

export default Memocompforfunctions