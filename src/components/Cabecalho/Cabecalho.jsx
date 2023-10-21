import Link from 'next/link'

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-2">
      <nav className="p-linha">
        <p>
          <Link href="/produtos/tenis">Tênis</Link>
        </p>
        <p>
          <Link href="/produtos/calca">Calça</Link>
        </p>
        <p>
          <Link href="/produtos/meia">Meia</Link>
        </p>
        <p>
          <Link href="/produtos/camisa">Camisa</Link>
        </p>
      </nav>
      </header>
    </div>
  )
}
