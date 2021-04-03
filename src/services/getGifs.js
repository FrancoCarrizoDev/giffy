import {API_KEY} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse;
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { url } = image.images.downsized_medium
            const { title, id } = image
            return { title, id, url }
        })
        return gifs
    }
}

export default function getGifs({limit = 25, keyword = 'morty', page = 0 } = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=r&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}