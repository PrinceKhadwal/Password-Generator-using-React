import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="w-screen hidden md:flex items:center justify-center py-4 fixed top-0 z-10">
      <nav className="max-w-screen-xl bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto">
        <ul className="flex items-center gap-14 text-white">
          <li>
            <Link to="hero" smooth spy offset={-80} className="menu-item">
            Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth spy offset={-80} className="menu-item">
            Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth spy offset={-80} className="menu-item">
            Work Experience
            </Link>
          </li>
          <li>
            <Link to="about" smooth spy offset={-80} className="menu-item">
            About Me
            </Link>
          </li>
          <li>
            <Link to="contact" smooth spy offset={-80} className="menu-item">
             Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar