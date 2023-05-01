import React from 'react'

function Landing() {

    return (
      <div className='landing-page'>
        <div className='component-page'>
          <div className='component-body-left'>
            <div className='title-1'>CLK</div>
            <div className='title-line'></div>
            <div className='title-2'>Pyschotherapy</div>
          </div>
          <div className='component-body-right'>
            {/* <span className='landing-img'><img src={butterfly} /></span> */}
          </div>
        </div>
        {/* <div className='nav'>
          <div className='nav-button'><a href="/#about">About</a></div>
          <div className='nav-button'><a href="/#experience">Experience</a></div>
          <div className='nav-button'><a href="/#services">Services</a></div>
          <div className='nav-button'><a href="/#coverage">Coverage & Fees</a></div>
          <div className='nav-button'><a href="/#publications">Publications</a></div>
          <div className='nav-button'><a href="/#contact">Contact</a></div>
        </div> */}
      </div>
    )
}

export default Landing