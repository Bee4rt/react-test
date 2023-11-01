import React from 'react'


const Header = () => {
  return (
    <div>
      <div className='header'>
        <a href="#" className='logo'>Logo</a>
        <ul className='nav-link'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
