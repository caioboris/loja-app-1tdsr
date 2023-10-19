import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <div className='bg-red-400 font-extrabold font-sans m-auto w-52'>
        <h1 className='text-center text-4xl'>OOPS! - 404</h1>
        <p>Não encontramos a página que você deseja</p>
        <figure>
            <Image src="https://http.cat/images/404.jpg" alt="404" width={650} height={500}/>
        </figure>
    </div>
  )
}
