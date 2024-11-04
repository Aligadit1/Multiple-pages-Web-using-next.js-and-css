"use client"
import React, {useRef } from 'react'
import Link from 'next/link'
function Header(){  
const headerRef =useRef<HTMLUListElement>(null);
const toggleHeader = ()=>{
  headerRef.current?.classList.toggle("header-li")
}
  return (
    <div className='header-div'>
        <ul className='header header-li' id='navbar' ref={headerRef}>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact-us"><li>Contact Us</li></Link>
            <Link href="/services"><li>Services</li></Link>
        </ul>
          <div className='hamburgerDiv' onClick={toggleHeader}>
        <div className='hamburger hamburger1'></div>
        <div className='hamburger hamburger2'></div>
        <div className='hamburger hamburger3'></div>
        </div>
    </div>
  )
}

export default Header
