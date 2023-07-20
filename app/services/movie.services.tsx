import axios from "axios";

// const API_KEY = process.env.API_KEY;
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

// console.log(API_BASE_URL)
const client = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL,
    params : {api_key : process.env.NEXT_PUBLIC_API_KEY}
})

export const searchMovies = async (query:string) =>{
    try {
        const response = await client.get("/search/movie", {params: {query,},});

        if (response.data && response.data.results) {
            return response.data.results;
        } else {
            console.error("couldn't get data")
        }
    }catch(error){
        console.error(error)
            return [];
            
    }
}