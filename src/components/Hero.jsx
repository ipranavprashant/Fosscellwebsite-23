import React from 'react'
import './Hero.css'
import Star from './assets/Star.svg'
import OldMan from './assets/Illustrations.svg'
import Button from './Custombutton'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero-wrap'>
    <span className='hero-section'>
        <span className='upper-section'>
            <p>Open source coding</p>
            <p>community of <span className='color-gradient'>NITC.</span></p>
        </span>
        <div className='second-section'>
            <span className='stars'>
            <img className="star1" src={Star} alt='illustration.svg'/>
            <img className="star2" src={Star} alt='illustration.svg'/>
            <img className="star3" src={Star} alt='illustration.svg'/>
            </span>
        </div>
        <div className='third-section'>
            <p>Join us and make a difference</p>
        </div>
        <div className='fourth-section'>
            <NavLink to='/'><Button buttonName='EXPLORE NOW'/></NavLink>
        </div>
    </span>
    <span className='oldman'>
        <img src={OldMan} alt='illustration.svg'/>
    </span>
    </div>
  )
}

export default Hero