import React, {createContext, useContext, useState} from "react";

const SearchContext = createContext();

export const SearchContextProvieder = ({children}) => {
    const [searchBtn, setSearchBtn] = useState(false)
    const [searchLoading, setSearchLoading] = useState(false)
    const [searchError, setSearchError] = useState(null)
    const [searchIn, setSearchIn] = useState('')
    const [searched, setSearched] = useState([])
    const apiKey = import.meta.env.VITE_API_KEY
    const apiAccessToken = import.meta.env.VITE_API_READ_ACCESS_TOKEN

    return (
        <SearchContext.Provider value = {{searchIn, setSearchIn, searched, setSearched, searchBtn, setSearchBtn, searchLoading, setSearchLoading, searchError, setSearchError, apiKey, apiAccessToken}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    return useContext(SearchContext)
}