import React from 'react'

const Nav = props => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <h3>Sean Vern</h3>
      </div>
      <div className='nav-items'>
        <div className='nav-item'>
          <a href='#projects'>
            <h3>Projects</h3>
          </a>
        </div>
        <div className='nav-item'>
          <a onClick={props.updateShowAboutMe}>
            <h3>About Me</h3>
          </a>

        </div>
        <div className='nav-item'>
          <a href='#contact'><h3>Contact</h3></a>

        </div>
      </div>
    </div>
  )
}

export default Nav
