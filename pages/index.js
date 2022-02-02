import Head from 'next/head'
import Layout from '../src/components/Layout'
import Home from '../src/components/Home'

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
