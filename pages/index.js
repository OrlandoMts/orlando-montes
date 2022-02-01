import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Home from '../components/Home'

//Investigar sobre los robots og:

export default function index() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Inicio</title>
          <meta name="description" content="Conoceme" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main>
          <Home />
        </main>
      </div>
    </Layout>
  )
}
