import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Camisa() {
  
  const response = await fetch("http://localhost:3000/api/vestuario/camisa")
  
  return (
    <div>
        <h1>CAMISA</h1>
        <p>Camisa meio feia mas legal</p>
        <figure>
            <Image src="/img/camisa.webp" alt="Imagem camisa" width={200} height={200}/>
        </figure>
    </div>
  )
}
