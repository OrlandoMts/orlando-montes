import React from 'react';
import Image from 'next/image';

const Project = ({img, title, desc, sitio, repo}) => {
  return (
    <ul className='container w-11/12 md:w-96 mb-3 mt-3 p-6 shadow rounded-md relative bg-white'>
        <li className='text-xl md:text-2xl mb-6 font-medium text-[#2D3E40]'><p>{title}</p></li>
        <li><Image src={img} alt={title}/></li>
        <li className='leading-8 tracking-wide text-[#97A6A0]'><p>{desc}</p></li>
        <div className='flex justify-end m-3 absolute bottom-0 right-0'>
            <li><a href={sitio} target="_blank" rel="noreferrer" className='text-[#2D3E40]'>Sitio</a></li>
            <li className='ml-8'><a href={repo} target="_blank" rel="noreferrer" className='text-[#2D3E40]'>Código</a></li>
        </div>
    </ul>
    );
};

export default Project;
