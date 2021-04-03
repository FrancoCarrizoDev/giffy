import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'

import './index.css'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' });

    return <div ref={fromRef} id="LazyTrending">
        <Suspense fallback={'Estoy cargando...'}>
        {isNearScreen ? <TrendingSearches /> : 'Estoy cargando...'}
        </Suspense>
    </div>
}

