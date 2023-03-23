import React from 'react'
import FooterIllustration from './assets/Footer.svg'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='uppersection'>
            <span className='ill'>
        <img src={FooterIllustration} alt='illustration.svg'/>
        </span>
        <span>
            <p className='textRight'>WANT TO</p>
            <p className='textRight'>CHAT WITH</p>
            <p className='textRight'>US</p>
        </span>
        </div>
        <span className='mid-section'>
            <p className='mid-section'>DROP US A MAIL AT</p>
            <p className='mid-section'>FOSSCELL@NITC.AC.IN</p>
        </span>

        <div className='bottom-section'>
            <p className='first'>OH AND DON'T FORGET TO SIGN UP FOR OUR MONTHLY NEWSLETTER FOR FOSSY UPDATES</p>
            <p className='second'>SIGN UP HERE</p>     
        </div>
    </div>
  )
}

export default Footer