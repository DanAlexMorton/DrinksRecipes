import React, { createContext, useContext, useState, useEffect, removeEventListener } from "react"

export const LocationHash = createContext(document.location.hash || '#')

export const useLocation = (spec) => {
    const hash = useContext(LocationHash)
    const parsed = {}
    const path = hash.slice(1).split('/')

    spec.split('/').forEach( ( find, index ) => {
        const [ name='_', defaultValue='' ] = find.split('=')
        const found = index < path.length ? path[ index ] || defaultValue : defaultValue
        parsed[ name ] = found
    })

    return parsed
}

export const Link = ({
    path,
    children,
    label='',
    'className':klass
}) => {
    if ( Array.isArray( path ))
        path = path.join( '/' )
    if ( !path.startsWith( '#' ))
        path = `#${ path }`
    const hash = useContext( LocationHash )
    const isCurrent = hash === path
    const isAncestor = !isCurrent && hash.startsWith( path )
    return(
        <span className={`Link
            ${ isCurrent && 'current' }}
            ${ isAncestor && 'inPath' }}
            ${ klass ?? '' }
        `}>
            <a href={ path }>
                { label }
                { children }
            </a>
        </span>
    )
}

export default function Router({children}) {
    const [ hash, setHash ] = useState(document.location.hash || '#')

    const update = ({newUrl}) => setHash(document.location.hash || '#')

    useEffect( () => {
        window.onhashchange = update
        return () => removeEventListener('hashchange', update)
    }, [])

    return(
        <LocationHash.Provider value={hash}>
            { children }
        </LocationHash.Provider>
    )
}