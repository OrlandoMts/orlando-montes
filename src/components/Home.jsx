import React from 'react';
import Image from 'next/image';
import svg from '../assets/img/undraw_Developer.svg'

const Home = () => {
  return (
      <section className='sm:flex justify-around p-4'>
        <div className='p-2 mx-0 my-4 sm:w-2/5'>
          <h1>¡Hola, soy Orlando Montes!</h1>
          <p>Tengo 24 años, estudie ing. Sistemas Computacionales. 
            Soy apasionado por la tecnlogía y los videojuegos. Megusta escribir
            codigo en react.js y tengo un amor oculto por RH.</p>
        </div>
        <div className='mx-0 my-5'>
          <Image src={svg} alt="Imagen svg" height={300} width={300}></Image>
        </div>
      </section>
    );
};

export default Home;
