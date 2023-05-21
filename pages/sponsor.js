import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

const Sponsor = () => {
  return (
    <main className="w-[80%] mx-auto border mt-2">
      <Head>
        <title>Sponsor | BEK Technology</title>
      </Head>

      <Link className='pl-2' href="https://bek.org.tr/kuruluslar/bek-teknoloji" target="_blank" >
          <Image
          width={100}
          height={100}
           style = {
             {
               objectFit: "contain"
             }
           }
            src = "https://bek.org.tr/files/img/2fz5fyhs.jpg"
            alt=""
          />
      </Link>
      <div className='flex items-center justify-between px-2 mt-2'>
        <Link Link href = "/"
        className = 'flex items-center justify-center px-3 py-2 border rounded-lg' >
        < AiFillPlayCircle/>
        <p className='ml-2'>Ana Ekrana Dön</p>
        </Link>
        <p>Sponsorlar Ürün Listesi</p>
      </div>
    </main>
  )
}

export default Sponsor