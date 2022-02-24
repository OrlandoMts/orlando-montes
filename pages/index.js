import Head from 'next/head'
import Layout from '../src/components/Layout'
import Home from '../src/components/Home'
import Footer from '../src/components/Footer'

export default function index() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Inicio</title>
          <meta name="description" content="Conoceme" />
          <link rel="icon" href="/favicon.svg" />
        </Head>

        <main className='bg-[#f6f6f6] md:h-[100%]'>
          <Home />
          <Footer />
        </main>
      </div>
    </Layout>
  )
}
