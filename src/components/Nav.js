import React from 'react'

function Nav() {

    return (

        <div className='nav'>
          <div className='nav-button'><a href="/#about">About</a></div>
          <div className='nav-button'><a href="/#experience">Experience</a></div>
          <div className='nav-button'><a href="/#services">Services</a></div>
          <div className='nav-button'><a href="/#coverage">Coverage & Fees</a></div>
          <div className='nav-button'><a href="/#publications">Publications</a></div>
          <div className='nav-button'><a href="/#contact">Contact</a></div>
        </div>
    )
}

export default Nav