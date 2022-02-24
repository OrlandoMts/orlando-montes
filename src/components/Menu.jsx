import React, { useContext } from 'react';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';
import AppContext from '../context/AppContext';
import 'animate.css';

const Navbar = () => {

    const {visibilityMenu, toggleMenu} = useContext(AppContext);

    const handleToggleMenu = () => {
        visibilityMenu();
    }

    return ( 
        <nav className='flex flex-col absolute z-10 top-0 left-0 bg-[#E4F2E7] w-80 h-80 justify-center content-around rounded-md animate__animated animate__backInLeft'>
            <div className='flex justify-end px-10'>
                <BiX size='2rem' onClick={handleToggleMenu}/>
            </div>
            <div className='flex md:container my-1.5 p-4 md:p-8 lg:p-12'>
                <ul className='flex-col m-5'>
                    <li className='mb-4'><Link href="/"><a className='text-2xl text-[#387373]' onClick={handleToggleMenu}>Inicio</a></Link></li>
                    <li className='mb-4'><Link href="/projects"><a className='text-2xl text-[#387373]' onClick={handleToggleMenu}>Proyectos</a></Link></li>
                    <li className='mb-4'><Link href="/contact"><a className='text-2xl text-[#387373]' onClick={handleToggleMenu}>Contacto</a></Link></li>
                </ul>
            </div>
        </nav>
        );
};

export default Navbar;
