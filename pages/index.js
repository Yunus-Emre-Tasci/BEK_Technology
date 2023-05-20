import {useState} from "react";

import { getStaticProps } from "@/API";

import Story from "@/components/Story";
import Sidebar from "@/components/Sidebar";


const Home=({items})=>{

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  console.log(items);
 
  // const ids=items.map((i)=>i.id)
  // const titles = items.map((i) => i.title)
  const urls= items.map((i) => i.url)
  const thumbnailUrls = items.map((i) => i.thumbnailUrl)
  

  return (
<main className="w-[80%] mx-auto border" >
  < Story thumbnailUrls = {
    thumbnailUrls
  }
  />
  <div className="flex h-full p-2">
    <div className = "w-[80%] h-screen bg-red-400 grid grid-cols-3 gap-2 " >
    <div className="col-span-3 bg-blue-300" ></div>
    <div className="col-span-2 bg-purple-400"></div>
    <div className="bg-black"></div>
    <div className="col-span-2 bg-purple-400"></div>
    <div className="bg-black"></div>
  </div>
  < Sidebar toggleMenu = {
    toggleMenu
  }
  isOpen = {
    isOpen
  }
  />
  </div>
  
</main> 
  )
}

export {
  getStaticProps
};

export default Home;
