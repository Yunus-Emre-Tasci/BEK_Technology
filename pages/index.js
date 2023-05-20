// import { fetchData } from "@/API"
// import { useEffect, useState } from "react"

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
<main>
  <h1>Hello</h1>
  {/* {
    item.map((title, i) =>
       <h2 key={i}> {title} </h2>
    )
  } */}
  {ids.map((i,index)=><li key={index}> {i} </li>)}
</main> 
  )
}
