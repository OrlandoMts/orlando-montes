import Link from "next/link";
import Image from "next/image";
import svg from "../src/assets/img/undraw_page_not_found.svg";

const NotFound = () => {
  return (
    <div>
        <p>Error</p>
        <Image src={svg} alt="svg not found"></Image>
        <Link href="/"><a>Volver al inicio</a></Link>
    </div>
    
  )
}

export default NotFound