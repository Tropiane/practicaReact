import type { Giphy } from "../data/gif.interface";
const API = "https://api.giphy.com/v1/gifs/random?api_key=ke5zBkwYpcLof79hMZzc8hVZXXTkId6X&tag=&rating=g";

const getData = fetch(API);

const insterImageDOM = (url: string)=>{
    const img = document.createElement('img');
    img.src = url;
    
    document.body.append(img)
}

getData.then()
.then((response)=>response.json())
.then((data: Giphy)=>{
    const imgUrl = data.data.images.original.url
    insterImageDOM(imgUrl)
})
