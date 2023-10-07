import Link from 'next/link'
import React from 'react'
import Post from './post/page'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/post">POST</Link>
        </li>
        <li>
          <Link href="/post/post1">POST</Link>
        </li>
        <li>
          <Link href="/post/post2">POST</Link>
        </li>
      </ul>
    </div>
  )
}

