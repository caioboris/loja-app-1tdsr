import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Meia() {
  return (
    <div>
        <h1>MEIA</h1>
        <p>Meia linda bonita</p>
        <p><Link href="/">Voltar</Link></p>
        <figure>
            <Image
            src="/img/meia.webp"
            alt="Imagem meia"
            width={200}
            height={200}>
            </Image>
        </figure>
    </div>
  )
}
