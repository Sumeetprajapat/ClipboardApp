import React from 'react'

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

 function Navbar(props) {
  return(

  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-btoggles-="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.link}</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul> */}
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  {/* <div className='d-flex'>
    <div className='bg-primary mx-2 'onClick={()=>{props.toggleMode('primary')}} style = {{height:'30px',width:'30px',cursor:'pointer'}}/>
    <div className='bg-success mx-2'onClick={()=>{props.toggleMode('success')}} style = {{height:'30px',width:'30px',cursor:'pointer'}}/>
    <div className='bg-danger mx-2'onClick={()=>{props.toggleMode('danger')}} style = {{height:'30px',width:'30px',cursor:'pointer'}}/>
    <div className='bg-warning mx-2'onClick={()=>{props.toggleMode('warning')}} style = {{height:'30px',width:'30px',cursor:'pointer'}}/>
  </div> */}
  <div class={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
   <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark</label>
</div>
</nav>
  );
}

 export default Navbar;
// Navbar.PropTypes = {
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired
// };
Navbar.defaultProps = {
    title:'Set title here',
    link:'link text '
};




