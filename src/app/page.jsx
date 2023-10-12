import Link from 'next/link'
import React from 'react'

export default function Home({children}) {
  return (
    <div>
      <header>
        <nav>
          <p><Link href="/produtos/tenis">Tênis</Link></p>
          <p><Link href="/produtos/calca">Calça</Link></p>
          <p><Link href="/produtos/meia">Meia</Link></p>
          <p><Link href="/produtos/camisa">Camisa</Link></p>
        </nav>
      </header>
    </div>   
  )
}

