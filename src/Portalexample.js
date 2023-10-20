import React from 'react'
import { ReactDOM } from 'react'

function Portalexample() {
    const portalContainer = document.getElementById('portal-root');
    const f = <h1>React Portals are an advanced concept that allows
    developers to render their elements outside the React hierarchy tree;
    without comprising the parent-child relationship between components</h1>

  return  ReactDOM.createPortal(f,portalContainer)
  
}

export default Portalexample