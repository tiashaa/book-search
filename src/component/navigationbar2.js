import React from 'react';
import {Link} from 'react-router-dom'

const Navigationbar2=()=>{
  return(
    <nav>
    <div className="nav-wrapper blue">
      <i className="brand-logo" style={{marginLeft:30}}>Book Forest</i>
      <ul id="nav-mobile" className="right hide-on-med-and-down" style={{marginRight:30}}>
        <li><Link to="/"><i className="material-icons">home</i></Link></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navigationbar2;