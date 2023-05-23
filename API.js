import axios from "axios"
import { END_POINT } from "./Data"

export async function getStaticProps() {
    
    // const response = await fetch(END_POINT);
    // const data = await response.json();

    const {data}=await axios(END_POINT)
    const items = data?.slice(0, 50).map(item => item);

    return {
        props: {
            items
        }
    };
}