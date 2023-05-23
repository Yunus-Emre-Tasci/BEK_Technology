import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  AiFillPlayCircle
} from 'react-icons/ai'
import {
  HiMagnifyingGlass
} from "react-icons/hi2"
import {
  getStaticProps
} from "@/API";
import SiparisContent from '@/components/SiparisContent'

const Siparis = ({
    items
  }) => {

    const ids = items.map((i) => i.id)
    const titles = items.map((i) => i.title)
    const urls = items.map((i) => i.url)

    const siparişData = [{
        id: ids[0],
        title: titles[0],
        puan: 130,
        adet: 2,
        url: urls[0]
      },
      {
        id: ids[1],
        title: titles[1],
        puan: 320,
        adet: 10,
        url: urls[1]
      },
      {
        id: ids[2],
        title: titles[2],
        puan: 150,
        adet: 25,
        url: urls[2]
      },
      {
        id: ids[3],
        title: titles[5],
        puan: 265,
        adet: 20,
        url: urls[3]
      },
      {
        id: ids[4],
        title: titles[4],
        puan: 138,
        adet: 1,
        url: urls[4]
      },
      {
        id: ids[5],
        title: titles[6],
        puan: 150,
        adet: 1,
        url: urls[5]
      },
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState(siparişData)

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };

    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <main className = "w-[80%] mx-auto  mt-2" >
       <Head>
        <title>Sipariş | BEK Technology</title>
      </Head>

      <div className = 'pb-2 border-b-2' >
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
           < input value = {
             searchTerm
           }
           onChange = {
             handleSearch
           }
           className = 'border-none outline-none w-[80%] bg-inherit'
           type = "text"
           placeholder = 'Ürün ismini giriniz' />
           <HiMagnifyingGlass className='w-6 h-5'/>
          </div>
        </div>
      </div>
      <div>
        <SiparisContent filteredCards={filteredCards} />
      </div>

    </main>
    
  )
}

export {
  getStaticProps
};

export default Siparis