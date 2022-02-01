import React from 'react';
import Layout from '../components/Layout';
import ProyectsList from '../components/ProyectsList'
import Head from 'next/head';

const proyects = () => {
  return (
      <Layout>
          <Head>
            <title>Proyectos</title>
            <meta name="description" content="Lista de proyectos" />
            {/* <link rel="icon" href="/favicon.ico" /> //pendiente */}
          </Head>
          <ProyectsList />
      </Layout>
  );
};

export default proyects;
