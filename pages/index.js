import {useState} from "react";

import { getStaticProps } from "@/API";

import Story from "@/components/Story";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";


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
    < Content urls = {
      urls
    }
    />
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
