import { Link } from 'gatsby'
import React from 'react'

export default function HeaderComponent() {
  return (
    <header className='border-b'>
      <div className="container">
        <div className="flex justify-center items-center">
          <Link to={'/'} className="text-3xl font-bold py-2 uppercase text-black">
            Testing Skripsi
          </Link>
        </div>
      </div>
    </header>
  )
}
