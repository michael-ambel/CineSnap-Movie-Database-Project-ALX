import { useSearchContext } from "../contexts/SearchContext";
import { useSection } from "../contexts/SectionContext";
import { Link } from "react-router-dom";

const SearchedMovies = (props) => {
    const posterUrlSm = 'https://image.tmdb.org/t/p/w185'
    const {dark} = useSection();
    const {searched, searchBtn, searchLoading, searchError} = useSearchContext()
  
 
    return ( 
        <div className={`w-full max-w-[1440px] mx-auto min-w-[1024px] bg-bg flex flex-col items-center justify-between px-[62px] py-[52px] ${dark? 'bg-bg' : 'bg-text_main'} ${searchBtn? 'block' : 'hidden'}`}>
                        <div className="h-auto pb-[14px]">
                            <p className={`h-[19px] font-bold text-[18px] my-[20px] ${dark? 'text-text_main':'text-card_black'}`}>Searched Result</p>
                        </div>

                        <div className={`w-full `}>
                            {searchLoading && <div>Loading...</div>}
                            {searchError && <div>'{searchError}'</div>}
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
     );
}
 
export default SearchedMovies;