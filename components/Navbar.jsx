import React, {useContext, useState} from 'react';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import Menu from './Menu';
import AppContext from '../src/context/AppContext';
import Dropdown from './Dropdown';

const Navbar = () => {

  const {visibilityMenu, toggleMenu} = useContext(AppContext);

  const handleToggleMenu = () => {
    visibilityMenu();
  }
  
  return (
    <nav className='border-solid border-y-2 border-t-0 border-opacity-80 border-gray-500'>
      <div className='flex justify-start items-center sm:block md:hidden h-20 ml-3'>
        <BiMenu size='2.5rem' onClick={handleToggleMenu}/>
        {toggleMenu && <Menu />}
      </div>
      <div className='hidden md:flex md:container my-1.5 p-4 md:p-8 lg:p-12 justify-end'>
        <ul className='flex md:space-x-8 space-x-12 items-baseline'>
            <li><Link href="/" return false><a className='md:text-lg lg:text-xl'>Inicio</a></Link></li>
            <li><Link href="/proyects"><a className='md:text-lg lg:text-xl'>Proyectos</a></Link></li>
            <li><Link href="/contact"><a className='md:text-lg lg:text-xl'>Contacto</a></Link></li>
            <li><Dropdown /></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;
