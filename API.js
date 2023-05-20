import axios from "axios"

export const fetchData=async()=>{
    const endpoint = "https://jsonplaceholder.typicode.com/photos"

    const data=await axios(endpoint)
    return data.data[
        [PromiseResult]
    ]
}