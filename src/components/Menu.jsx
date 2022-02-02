import React, { useContext } from 'react';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';
import AppContext from '../context/AppContext';

const Navbar = () => {

    const {visibilityMenu, toggleMenu} = useContext(AppContext);

    const handleToggleMenu = () => {
        visibilityMenu();
    }

    return ( 
        <nav className='flex flex-col absolute z-10 top-0 bg-gray-600 w-80 h-80 justify-center content-around'>
            <div className='flex justify-end px-10'>
                <BiX size='2rem' onClick={handleToggleMenu}/>
            </div>
            <div className='flex md:container my-1.5 p-4 md:p-8 lg:p-12'>
                <ul className='flex-col m-5 space-y-2.5'>
                    <li><Link href="/" return false><a className='text-lg' onClick={handleToggleMenu}>Inicio</a></Link></li>
                    <li><Link href="/projects"><a className='text-lg' onClick={handleToggleMenu}>Proyectos</a></Link></li>
                    <li><Link href="/contact"><a className='text-lg' onClick={handleToggleMenu}>Contacto</a></Link></li>
                </ul>
            </div>
        </nav>
        );
};

export default Navbar;
