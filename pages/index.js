// import { fetchData } from "@/API"
// import { useEffect, useState } from "react"
import {
  GiHamburgerMenu
} from "react-icons/gi"

import Image from "next/image";

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
  <div className=" w-[20%] h-screen bg-yellow-400 ">
    <div className="h-[33%]">
      <div className="flex items-center justify-between p-2 mx-1 border border-gray-400">
        <h4>Menü</h4>
        < span className="" > < GiHamburgerMenu /> </span>
      </div>
    </div>
    <div className="mx-2 bg-zinc-900 h-[200px] mt-2">Placeholder</div>
  </div>
  </div>
  
</main> 
  )
}
