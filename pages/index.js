// import { fetchData } from "@/API"
// import { useEffect, useState } from "react"
import {
  useState
} from "react";
import {
  GiHamburgerMenu
} from "react-icons/gi"

import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";

const images = [{
    id: 1,
    src: "https://bek.org.tr/files/img/bwxumoow.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://www.farmasigorta.com/Images/static/farmasigorta.png",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://bek.org.tr/files/img/m5mm02pt.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://bek.org.tr/files/img/xyufwrrn.jpg",
    alt: "Image 4",
  },
];

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  const items = data.slice(0, 50).map(item => item);

  return {
    props: {
      items
    }
  };
}


export default function Home({
  items
}) {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(items);
 
  const ids=items.map((i)=>i.id)
  const titles = items.map((i) => i.title)
  const urls= items.map((i) => i.url)
  const thumbnailUrls = items.map((i) => i.thumbnailUrl)
  

  // const [photos, setPhotos] = useState([])

  // useEffect(() => {
  //   const data=fetchData()
  //   setPhotos(data)
  // }, [])

  // console.log(photos);

  return (
<main className="w-[80%] mx-auto border" >
  <div div className = "flex p-6 overflow-x-auto gap-x-3" >
    {
      thumbnailUrls.map((thumb,i)=>(
        <div key={i} className="text-center">
          <div className = "w-[60px] h-[60px]" >
            < Image className = "rounded-full ring-2 ring-blue-400 ring-offset-2 ring-offset-blue-200"
            src = {
              thumb
            }
            width = {
              60
            }
            height = {
              60
            }
            alt = "thumb" />
          </div>
          <p>Story {i+1} </p>
        </div>
      ))
    }
  </div>
  <div className="flex h-full p-2">
    <div className = "w-[80%] h-screen bg-red-400 grid grid-cols-3 gap-2 " >
    <div className="col-span-3 bg-blue-300" ></div>
    <div className="col-span-2 bg-purple-400"></div>
    <div className="bg-black"></div>
    <div className="col-span-2 bg-purple-400"></div>
    <div className="bg-black"></div>
  </div>
  <div className=" w-[20%] h-screen ">
    <div className="h-[33%]">
      < div className = "flex items-center justify-between p-2 mx-1 border border-gray-400 rounded-sm shadow-md" >
        <h4>Menü</h4>
        < span className="cursor-pointer" onClick={toggleMenu} > < GiHamburgerMenu /> </span>
      </div>
      {isOpen ? (
        <div className = "flex flex-col px-1 pt-1 text-xs gap-y-1 sm:text-xs md:text-xs lg:text-sm" >
        <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">Formlar</button> 
        <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">Faydalı Linkler</button> 
        <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">Araçlar</button> 
        <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">E-Fatura</button> 
        <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">Sizi Dinliyoruz</button> 
        <button className="border border-gray-500 rounded-md sm:py-[0.15rem] shadow-md ">BEK Akademi</button> 
      </div>
      ) : (
        <div className="w-full h-full text-center text-blue-600">
          <h2>BEK TEKNOLOJİ</h2>
        </div>
      ) }  
    </div>
    <div className="mx-2  h-[200px] mt-2">
      < ImageSlider images = {
        images
      }/>
    </div>
  </div>
  </div>
  
</main> 
  )
}
