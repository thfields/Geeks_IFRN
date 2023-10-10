import Link from 'next/link'
import React from 'react'

const Lateral = () => {
  return (
    <div className="bg-white w-min h-64 p-5 rounded-2xl flex flex-col mt-10
    justify-center items-center shadow-xl gap-1">
      <h1>Edições</h1>
      <Link href="/2017" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2017</Link>
      <Link href="/2018" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2018</Link>
      <Link href="/2019" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2019</Link>
      <Link href="/2020" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2020</Link>
      <Link href="/2021" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2021</Link>
      <Link href="/2022" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2022</Link>
      <Link href="/2023" className='rounded-xl hover:text-white hover:bg-minhaCor px-5'>2023</Link>
    </div>
  )
}

export default Lateral