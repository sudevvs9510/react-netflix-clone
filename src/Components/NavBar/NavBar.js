import React from 'react';
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar z-'>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      <div className='avatar-container'>
       
        <div className='buttons'>
          <button className='bg-red'>JOIN NOW</button>
          <button className='bg-white'>SIGN IN</button>
        </div>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>
    </div>
  )
}

export default NavBar
