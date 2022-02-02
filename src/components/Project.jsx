import React from 'react';
import Image from 'next/image';

const Project = ({img, title, desc, sitio, repo}) => {
  return (
    <ul className='container w-11/12 md:w-96 bg-slate-400 mb-3 mt-3 p-6 rounded-md'>
        <li className='text-xl md:text-2xl mb-6 font-medium text-blue-600'><p>{title}</p></li>
        <li ><Image src={img} alt={title} height={144} width={200}/></li>
        <li className='leading-8 tracking-wide'><p>{desc}</p></li>
        <div className='flex justify-end'>
            <li><a href={sitio} target="_blank" rel="noreferrer">Sitio</a></li>
            <li className='ml-8'><a href={repo} target="_blank" rel="noreferrer">Código</a></li>
        </div>
    </ul>
    );
};

export default Project;
