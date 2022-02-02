import React from 'react';
import Layout from '../src/components/Layout';
import ProjectsList from '../src/components/ProjectsList'
import Head from 'next/head';

const proyects = () => {
  return (
      <Layout>
          <Head>
            <title>Proyectos</title>
            <meta name="description" content="Lista de proyectos" />
            {/* <link rel="icon" href="/favicon.ico" /> //pendiente */}
          </Head>
          <ProjectsList />
      </Layout>
  );
};

export default proyects;
