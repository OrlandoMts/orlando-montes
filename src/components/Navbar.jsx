import React, {useContext, useState} from 'react';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import logo from '../assets/icons/logo.svg'

const Navbar = () => {

  const {visibilityMenu, toggleMenu} = useContext(AppContext);

  const handleToggleMenu = () => {
    visibilityMenu();
  }
  
  return (
    <nav className='flex items-center relative border-solid border-y-2 border-t-0 border-opacity-80 bg-[#f6f6f6] border-[#97A6A0] h-[110px]'>
      <div className='flex justify-start items-center sm:block md:hidden h-20 ml-3'>
        <BiMenu size='2.5rem' onClick={handleToggleMenu}/>
        {toggleMenu && <Menu />}
      </div>
      <div className='ml-4 sm:ml-6 w-[150px] sm:w-[200px]'>
        <Link href="/"><Image src={logo} alt='Portafolio web' width={200} height={100} className="cursor-pointer"></Image></Link>
      </div>
      <div className='hidden md:flex md:container my-1.5 p-4 md:p-8 lg:p-12 justify-end'>
        <ul className='flex md:space-x-8 space-x-12 items-baseline'>
            <li><Link href="/"><a className='md:text-lg lg:text-xl text-[#2D3E40]'>Inicio</a></Link></li>
            <li><Link href="/projects"><a className='md:text-lg lg:text-xl text-[#2D3E40]'>Proyectos</a></Link></li>
            <li><Link href="/contact"><a className='md:text-lg lg:text-xl text-[#2D3E40]'>Contacto</a></Link></li>        
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;
