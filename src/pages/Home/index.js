import React, {useCallback} from 'react';
import { useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../../hooks/useGifs';
import TrendingSearches from '../../components/TrendingSearches';
import SearchForm from 'components/SearchForm'

export default function Home(){
    const [path, pushLocation] = useLocation();
    const {loading, gifs } = useGifs()
    
    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    },[pushLocation])

    return(
        <div className="home-container">
            <SearchForm onSubmit={handleSubmit}/>
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <div>
            <TrendingSearches/>
            </div>
        </div>
    )
}