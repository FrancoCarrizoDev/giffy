import React from 'react';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import {useGifs} from 'hooks/useGifs';
import useSEO from 'hooks/useSEO';

export default function SearchResults ({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }
    const title = gifs ? `${gifs.length} resultados de ${keyword}` : loading ? 'Cargando ...' : ''
    useSEO({title})

    return <>
        {loading ? "Cargando" : <ListOfGifs gifs={gifs}/>}
        <br/>
        <button onClick={handleNextPage}>Get next page</button>
    </>
}