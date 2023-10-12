import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Calca() {
  return (
    <div>
        <h1>CALÇA</h1>
        <p>Calça horrivel horrorosa horrenda</p>
        <p><Link href="/">Voltar</Link></p>
        <figure>
            <Image
            src="/img/calca.jpg"
            alt="Imagem calça"
            width={200}
            height={200}>
        </Image>
        </figure>
    </div>
  )
}
