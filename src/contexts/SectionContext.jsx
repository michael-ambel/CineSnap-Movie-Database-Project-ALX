import React, {createContext, useContext, useRef, useState} from 'react'

const SectionContext = createContext()

export const SectionProvider = ({children}) => {
    const [dark, setDark] = useState(true)

    const [activeSection, setActiveSection] = useState('home')

    const homeRef = useRef(null)
    const moviesRef = useRef(null)
    const tvShowsRef = useRef(null)

    return (
        <SectionContext.Provider value = {{activeSection, setActiveSection, dark, setDark, homeRef, moviesRef, tvShowsRef}}>
            {children}
        </SectionContext.Provider>
    )

    
}

export const useSection = () => {
        return useContext(SectionContext)
    }