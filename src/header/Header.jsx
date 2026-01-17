import React from 'react'
import style from './header.module.css'

export default function Header() {
  return <>
   <nav className={`${style.customNavbar}  navbar navbar-expand-lg `}>
  <div className={`container`}>
    <a className={`${style.navbarBrand} text-white fw-bold`} href="#">
      START BOOTSTRAP
    </a>

    <button
      className={`navbar-toggler text-white`}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className={`navbar-toggler-icon`}></span>
    </button>

    <div className={`collapse navbar-collapse`} id="navbarNav">
      <ul className={`navbar-nav ms-auto`}>
        <li className={`nav-item`}>
          <a className={`${style.navLink} text-white fw-bold `}  href="#">PORTFOLIO</a>
        </li>
        <li className={`nav-item`}>
          <a className={`${style.navLink} text-white fw-bold`} href="#">ABOUT</a>
        </li>
        <li className={`nav-item`}>
          <a className={`${style.navLink} text-white fw-bold`} href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  
}
