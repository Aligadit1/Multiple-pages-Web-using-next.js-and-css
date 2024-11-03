import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div>
        <ul className='header'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact-us"><li>Contact Us</li></Link>
            <Link href="/services"><li>Services</li></Link>
        </ul>
      
    </div>
  )
}

export default Header
