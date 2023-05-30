import React from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { RiMenu2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function Navbar({ setDarkMode, darkMode }) {
  return (
    <nav className="bg-slate-400 dark:bg-black shadow-sm shadow-black py-4 px-4 tablet:py-5 tablet:px-10 w-full flex justify-between items-center">
      <h2 className="text-black dark:text-white text-4xl font-bold hidden uppercase">logo</h2>
      <RiMenu2Line className='text-lg laptop:hidden'/>
      <ul className=' items-center gap-4 hidden laptop:flex order-1'>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink to={"contact"}>Contact</NavLink>
        </li>
      </ul>
      <button className="bg-green-700 p-3 hover:bg-slate-600 duration-500 
       hover:text-red-700 hidden tablet:inline-block 
        rounded text-white">login</button>
      {darkMode ? (
        <BsSun
          onClick={() => setDarkMode(false)}
          className="text-lg text-white cursor-pointer"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setDarkMode(true)}
          className="text-lg text-black cursor-pointer"
        />
      )}
    </nav>
  );
}

export default Navbar;
