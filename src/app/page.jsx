import Image from "next/image";

export default function Home(){

  return(
    <div>
       <h1>Home</h1>
        <div>
          <figure>
            <Image src="/img/ararinha.png" alt="Nuvem de palavras" width={640} height={464}/>
          </figure>
        </div>
    </div>
  )
}