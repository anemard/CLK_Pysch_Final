import React from 'react'

function Landing() {

  const clickHandler = () => {
    console.log("hello!")
  }

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
        <div className='nav'>
          <div className='nav-button' onClick={clickHandler}>About</div>
          <div className='nav-button' onClick={clickHandler}>Experience</div>
          <div className='nav-button' onClick={clickHandler}>Services</div>
          <div className='nav-button' onClick={clickHandler}>Coverage & Fees</div>
          <div className='nav-button' onClick={clickHandler}>Publications</div>
          <div className='nav-button' onClick={clickHandler}>Contact</div>
        </div>
      </div>
    )
}

export default Landing