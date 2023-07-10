import React from 'react'
import './Navbar.css'

function navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Aamir</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
        </div>
      
    </div>
  )
}

export default navbar
