import React, { useState, useEffect } from 'react'

function Nav() {
  const [shadow, setShadow] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [mobileview, setMobileView] = useState(false)

  const handleShadow = () => {
    if (window.scrollY >= 650) {
      setShadow(true)
    }
    else {
      setShadow(false)
    }
  }

  function navFn() {
    if (mobileNav) {
      setMobileNav(false)
    }
    else { 
      setMobileNav(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className='nav-component'>
      {(window.innerWidth > 770) ? 
      (
        <div className={shadow ? 'nav-shadow' : 'nav'}>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#about">About</a></div>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#experience">Experience</a></div>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#interests">Interests</a></div>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#services">Services</a></div>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#coverage">Coverage & Fees</a></div>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#publications">Publications</a></div>
          <div className={shadow ? 'nav-button-shadow' : 'nav-button'}><a href="/#contact">Contact</a></div>
        </div>
      ) : (

        <div className="topnav">
          {(mobileNav) ? (

            <>
            <i className="fa fa-bars" onClick={navFn}></i>
            <div className='nav-mobile-background'></div>
            <div className="myLinks">
              <a className="navMobileLink" href="/#about" onClick={navFn}>About</a>
              <a className="navMobileLink" href="/#experience" onClick={navFn}>Experience</a>
              <a className="navMobileLink" href="/#interests" onClick={navFn}>Interests</a>
              <a className="navMobileLink" href="/#services" onClick={navFn}>Services</a>
              <a className="navMobileLink" href="/#coverage" onClick={navFn}>Coverage & Fees</a>
              <a className="navMobileLink" href="/#publications" onClick={navFn}>Publications</a>
              <a className="navMobileLink" href="/#contact" onClick={navFn}>Contact</a>
            </div>
            </>
          ) : (

              <i className="fa fa-bars" onClick={navFn}></i>

          ) }


        </div>

      )}



    </div>
  )
}

export default Nav