import React from 'react';
import Layout from '../src/components/Layout';
import ProjectsList from '../src/components/ProjectsList';
import Head from 'next/head';

const proyects = () => {
  return (
      <Layout>
          <Head>
            <title>Proyectos</title>
            <meta name="description" content="Lista de proyectos" />
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <div className='bg-[#f6f6f6]'>
            <ProjectsList />
          </div>
      </Layout>
  );
};

export default proyects;
