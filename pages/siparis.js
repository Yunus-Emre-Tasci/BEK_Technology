import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  AiFillPlayCircle
} from 'react-icons/ai'
import {
  HiMagnifyingGlass
} from "react-icons/hi2"

const Siparis = () => {
  return (
    <main className = "w-[80%] mx-auto  mt-2" >
       <Head>
        <title>Sipariş | BEK Technology</title>
      </Head>

      <div>
        <Link className = 'inline-block pl-2 '
      href = "https://bek.org.tr/kuruluslar/bek-teknoloji"
      target = "_blank" >
          <Image
          width={100}
          height={100}
          priority = {
            true
          }
           style = {
             {
               objectFit: "contain"
             }
           }
            src = "https://bek.org.tr/files/img/2fz5fyhs.jpg"
            alt=""
          />
      </Link>
      <div className = 'flex items-center justify-between px-2 mt-4' >
         <Link href = "/"
        className = 'flex items-center justify-center px-3 py-2 border-2 border-gray-300 rounded-lg shadow-md' >
        < AiFillPlayCircle/>
        <p className='ml-2 text-sm md:text-base '>Ana Ekrana Dön</p>
        </Link>
        <div className='border-2 border-gray-300 shadow-md rounded-lg flex justify-between items-center w-[80%] py-2 px-3 ml-1'>
           <input className='border-none outline-none w-[80%] bg-inherit' type="text" placeholder='Ürün ismini/numarasını yazınız' />
           <HiMagnifyingGlass className='w-6 h-5'/>
        </div>
      </div>
      </div>

    </main>
    
  )
}

export default Siparis