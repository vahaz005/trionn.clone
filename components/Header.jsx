import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="header__container">
            <div className="logo">
                <img src="https://trionn.com/assets/images/logo.svg" alt="" />
            </div>
            <div className="togglemode">
                <div className="togglemode1">
                <img src="https://trionn.com/_next/static/media/light-mode-icon.035572eb.svg" alt="" />
                </div>
                <div className="togglemode2">
                    <img src="https://trionn.com/_next/static/media/sound-mute.99b17403.svg" alt="" />
                </div>
               
            </div>
            <div className="menu">
                <div className="text">MENU</div>
                <div className="img">
                    <span className='s1'></span>
                    <span className='s2'></span>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
