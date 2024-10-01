import { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { useSection } from "../contexts/SectionContext";
import { Link } from "react-router-dom";
import Header from "./Header";

const SearchedMovies = () => {
    const [searchWord, setSearchWord] = useState(null)
    const posterUrlSm = 'https://image.tmdb.org/t/p/w185'
    const {dark} = useSection();
    const {searchIn, searched, setSearched,  searchLoading,setSearchLoading, searchError, setSearchError, apiKey, newSearch, setSearchIn} = useSearchContext()
    console.log(searchIn);
    useEffect(() => {

        setSearchWord(searchIn)

        const searchHandler = async (searchIn) => {
          
            setSearchLoading(true)
            setSearchError(null)
    
            try{
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchIn}`)
                const movies = await response.json()
                if(!response.ok){
                    throw Error ('Fetching Error')
                }
                if(movies.results.length === 0){
                    console.log('no movie found');
                    throw Error('No Movie Found')
                }
    
                if(movies.results.length > 0){
                    setSearched(movies.results)                    
                    setSearchLoading(false)
                    setSearchError(null)
                    setSearchIn('')
                }                           
            }
            catch(error){
                setSearchError(error.message)
                setSearchLoading(false)
                setSearched(null)
            }  
        }
    searchHandler(searchIn)
        
    }, [newSearch])
  
 
    return ( 
        <div className="w-full text-text_main">
            <Header />
            <div className={`w-full max-w-[1440px] mx-auto min-w-[1024px] bg-bg flex flex-col items-center justify-between px-[62px] py-[52px] ${dark? 'bg-bg' : 'bg-text_main'}`}>
                        <div className="h-auto mb-[40px]">
                            <p className={`h-[19px] font-bold text-[18px] my-[10px] ${dark? 'text-text_main':'text-card_black'}`}>Searched Result for {searchWord}</p>
                        </div>

                        <div className={`w-full `}>
                            {searchLoading && <div>Loading...</div>}
                            {searchError && <div className={dark? 'text-text_main':'text-card_black'}>'{searchError}'</div>}
                            {searched && 
                            <div>
                                <ul className="grid grid-cols-5 w-full justify-items-center justify- gap-[38px]">
                                    {searched.map((movie) => (
                                        <li key={movie.id}>
                                            <Link to={`/detail/${movie.id}`} className="flex flex-col items-start h-[300px] w-[153px]">
                                                <div className={`flex items-center justify-center w-full p-[3px] h-[228px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                                    <img src={movie.poster_path? `${posterUrlSm}/${movie.poster_path}`: `\del\EVOL.png`} alt="" />  
                                                </div>
                                                <h1 className={`text-[14px] font-bold py-1 ${dark? 'text-text_main' : 'text-card_black'}`}>{movie.title}</h1>
                                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                                    <p>{new Date(movie.release_date).getFullYear()}</p>
                                                    <div className="flex items-center">
                                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}> {Math.round(movie.vote_average*10)/10}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                        </div>
                    </div>
        </div>
     );
}
 
export default SearchedMovies;