import React from 'react';
import Layout from '../src/components/Layout';
import Contact from '../src/components/Contact';
import Head from 'next/head';

const contact = () => {
  return (
    <Layout>
      <Head>
          <title>Contacto</title>
          <meta name="description" content="Información de contacto" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#f6f6f6] h-[90vh]'>
        <Contact/>
      </div>  
    </Layout>
    );
};

export default contact;
