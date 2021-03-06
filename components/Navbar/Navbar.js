import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faHome, faU, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuHover, setMenuHover ] = useState(false);
    const [home,setHome] = useState(false);
    const [login,setLogin] = useState(false);
    const [about,setAbout] = useState(false);

    console.log(menuHover)
    const navItems = <>
    <li><Link href='/'>Home</Link></li>
    <li><Link href='/about'>ABOUT</Link></li>
    <li><Link href='/login'>LOGIN</Link></li>
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">FURNITURE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {navItems}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;