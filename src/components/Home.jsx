import React from 'react';
import Image from 'next/image';
import svg from '../assets/img/undraw_code.svg'
import 'animate.css';

const Home = () => {
  return (
      <section className='sm:flex justify-around p-4 animate__animated animate__zoomIn'>
        <div className='p-2 mx-0 my-4 sm:w-2/5'>
          <h1 className='text-2xl mb-5 sm:text-7xl text-[#387373]'>¡Hola, soy Orlando Montes!</h1>
          <p className='text-base md:text-xl mt-6 p-2 text-[#2D3E40]'>Tengo 24 años, egresado de Ing. en Sistemas Computacionales. 
            Soy apasionado por la tecnología y los videojuegos. Me gusta escribir
            codigo en react.js y tengo un amor oculto por Recursos Humanos.</p>
        </div>
        <div className='mx-0 my-5'>
          <Image src={svg} alt="Imagen svg" height={300} width={400}></Image>
        </div>
      </section>
    );
};

export default Home;
