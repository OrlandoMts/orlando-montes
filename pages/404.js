import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import svg from "../src/assets/img/undraw_page_not_found.svg";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
        <Head>
            <title>Pagina no encontrada</title>
            <meta name="description" content="Pagina no encontrada" />
            <link rel="icon" href="/favicon.svg" />
        </Head>
        <div className="p-8">
          <Image src={svg} alt="svg not found" width={400} height={400}></Image>
        </div>
        <div>
          <Link href="/"><a className="text-3xl text-[#387373]">Regresar al inicio</a></Link>
        </div>
    </section>
    
  )
}

export default NotFound