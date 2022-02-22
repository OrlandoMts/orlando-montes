import React from 'react';
import Image from 'next/image';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-around w-full h-20 p-4 static sm:absolute bottom-0 border-solid border-y-2 border-b-0 border-opacity-80 border-[#97A6A0]">
        <div className='mt-2'>
          <p className='text-[#387373]'>Hecho con pasión 🇲🇽</p>
        </div>
        <div className='flex justify-evenly mt-2 w-2/5 sm:w-1/4'>
          <a
          href="https://www.instagram.com/orlando.monts/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaInstagram className='cursor-pointer' size='2rem'/>
          </a>
          <a 
          href="https://www.linkedin.com/in/orlando-daniel-montes-antonio-6914331b5/"
          target="_blank"
          rel="noopener noreferrer">
            <FaLinkedin className='cursor-pointer w-6' size='2rem'/>
          </a>
          <a href="https://github.com/OrlandoMts"
          target="_blank"
          rel="noopener noreferrer">
            <DiGithubBadge className='cursor-pointer' width={300} size='2rem'/>
          </a>
        </div>
    </footer>
  );
};

export default Footer;
