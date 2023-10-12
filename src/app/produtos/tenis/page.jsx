import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Tenis() {
  return (
    <div>
        <h1>TÊNIS</h1>
        <p>Tenis top show de bola</p>
        <p><Link href="/">Voltar</Link></p>
        <figure>
            <Image
            src="/img/tenis.jpg"
            alt="Imagem tenis"
            width={200}
            height={200}>
        </Image>
        </figure>
    </div>
  )
}
