import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Camisa() {
  return (
    <div>
        <h1>CAMISA</h1>
        <p>Camisa meio feia mas legal</p>
        <p><Link href="/">Voltar</Link></p>
        <figure>
            <Image
            src="/img/camisa.webp"
            alt="Imagem camisa"
            width={200}
            height={200}>
            </Image>
        </figure>
    </div>
  )
}
