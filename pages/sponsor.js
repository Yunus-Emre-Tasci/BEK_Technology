import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import { AiFillPlayCircle } from 'react-icons/ai'
import {
  getStaticProps
} from "@/API";
import SponsorContent from '@/components/SponsorContent';
// import SponsorCard from '@/components/SponsorCard'

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
      title: titles[5],
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
    <main className = "w-[80%] mx-auto dark:bg-gray-700 dark:text-white mt-2 pb-2" >
      <Head>
        <title>Sponsor | BEK Technology</title>
      </Head>

      <div className = 'pb-2'>
       <SponsorContent sponsorData = {sponsorData}/>
      </div>

      <div className='px-3 py-2 text-xs text-center text-gray-600 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-800'>
         <p>Bu kampanya S.S. Bursa Eczacılar Kooperatifi Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas nulla qui iusto itaque. In consequuntur unde, commodi perspiciatis doloribus atque dolor sunt mollitia ipsum, nulla quos delectus veritatis vitae placeat fugiat ducimus qui quas, iste quibusdam error? Incidunt, voluptates inventore! Consectetur nihil aliquid doloribus debitis iusto non reiciendis reprehenderit.</p>
         <p className='text-blue-500 cursor-pointer'>Çekiliş şartlarını öğrenmek için tıklayınız.</p>
      </div>
      
    </main>
  )
}

export {
  getStaticProps
};

export default Sponsor