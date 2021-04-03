import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResonse => {
    const {data} = apiResonse
    const {images, title, id} = data
    const {url} = images.downsized_medium
    return {title, id, url}
}

export default function getSingeGif({id}){
    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}