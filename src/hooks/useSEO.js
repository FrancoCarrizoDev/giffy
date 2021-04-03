import {useEffect, useRef} from 'react'

export default function useTitle({description, title}){
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(() => {
        const previousDescription = prevDescription.current
        const metaDescription = document.querySelector('meta[name="description"]')
        if(description) {
            metaDescription.setAttribute('content', description)
        }

        return () => metaDescription.setAttribute('content', previousDescription)

    }, [description])

    useEffect(() => {
        const previuosTitle = prevTitle.current
        
        if(title){
            document.title = `${title} | 'Giffy`
        }

        return () => {
            document.title = previuosTitle
        }
    }, [title])
}