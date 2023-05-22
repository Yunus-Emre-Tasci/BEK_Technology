import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import {
  getStaticProps
} from "@/API";
import SponsorCard from '@/components/SponsorCard'

const Sponsor = ({
    items
  }) => {

  const ids = items.map((i) => i.id)
  const titles = items.map((i) => i.title)
  const urls = items.map((i) => i.url)
  // const thumbnailUrls = items.map((i) => i.thumbnailUrl) 
  
  const sponsorData=[
    {
      id:ids[0],
      title:titles[0],
      model:"PS 9084 HM",
      adet:3,
      url:urls[0]
    },
    {
      id: ids[1],
      title: titles[1],
      model: "Mini SE Compo",
      adet: 2,
      url: urls[1]
    },
    {
      id: ids[2],
      title: titles[2],
      model: "DC +15",
      adet: 2,
      url: urls[2]
    },
    {
      id: ids[3],
      title: titles[3],
      model: "T 290",
      adet: 3,
      url: urls[3]
    },
    {
      id: ids[4],
      title: titles[4],
      model: "64 GB",
      adet: 5,
      url: urls[4]
    },
  ]
  
  return (
    <main className = "w-[80%] mx-auto border mt-2" >
      <Head>
        <title>Sponsor | BEK Technology</title>
      </Head>

      <div className='pb-2 border-b-2'>
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
      <div className='flex items-center justify-between px-2 mt-4'>
        <Link Link href = "/"
        className = 'flex items-center justify-center px-3 py-2 border-2 border-gray-300 rounded-lg' >
        < AiFillPlayCircle/>
        <p className='ml-2'>Ana Ekrana Dön</p>
        </Link>
        <p>Sponsorlar Ürün Listesi</p>
      </div>
      </div>
      
      <div className = 'flex flex-wrap justify-center mt-3 gap-x-6 gap-y-4' >
        {
          sponsorData.map((sponsor,i)=>(
            <SponsorCard key={i} sponsor={sponsor} />
          ))
        }
      </div>
      
    </main>
  )
}

export {
  getStaticProps
};

export default Sponsor