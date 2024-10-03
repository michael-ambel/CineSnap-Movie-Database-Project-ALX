// genre_id
// fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre_id}`)
// Action: 28
// Sci-Fi (Science Fiction): 878
// Fantasy: 14
// Horror: 27
// Adventure: 12
// Mystery: 9648

import { useEffect, useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import { useSection } from "../../contexts/SectionContext";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Gener = () => {
    const posterUrlSm = 'https://image.tmdb.org/t/p/w185'
    const {dark} = useSection();
    const {apiKey} = useSearchContext()
    const p = useParams()
    
    const [gener, setGener] = useState(null)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log(p.id);
    //gener 
    
    
    useEffect(() => {
        switch (p.id){
            case 'Action':
                setGener(28)
                break ;
            
            case 'Sci_Fi':
                setGener(878)
                break ;
            
            case 'Fantasy':
                setGener(14)
                break ;
            
            case 'Comedy':
                setGener(35)
                break ;
            
            case 'Horror':
                setGener(27)
                break ;
            
            case 'Adventure':
                setGener(12)
                break ;
            
            case 'Drama':
                setGener(18)
                break ;
            default:
                setGener(null)  
        }
        console.log(gener);
                
        if(gener){
            const fetchGener = async (gener) => {
                setIsLoading(true)
                setError(null)
                try{
                    const generRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${gener}`)
                    const dataRes = await generRes.json()
                    setData(dataRes.results)
                    setIsLoading(false)
                    
                }
                catch(error){
                    setError(error.message)
                    setIsLoading(false)
                }

            }
        
        fetchGener(gener)
        }
    },[p, gener])

    

    return (   
        <div className="w-full h-auto">
            <Header />
            <div className={`w-full h-auto max-w-[1440px] mx-auto  bg-bg flex flex-col items-center justify-between p-[14px] md:px-[36px] lg:px-[62px] py-[52px] ${dark? 'bg-bg' : 'bg-text_main'}`}>
                <div className="h-auto pb-[14px]">
                    <p className={`h-[19px] font-bold text-[20px] mb-[50px] ${dark? 'text-text_main':'text-card_black'}`}>{p.id} </p>
                </div>
                <div className={`w-full `}>
                    {isLoading && <div>Loading...</div>}
                    {error && <div>'{error}'</div>}
                    {data && 
                    <div>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full justify-items-center justify- gap-[38px]">
                            {data.map((movie) => (
                                <li key={movie.id}>
                                    <Link to={`/detail/${movie.id}`} className="flex flex-col items-start h-[300px] w-[153px]">
                                        <div className={`flex items-center justify-center w-full p-[3px] h-[228px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                            <img src={movie.poster_path? `${posterUrlSm}${movie.poster_path}`: `\del\EVOL.png`} alt="" />  
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
            <Footer />
        </div>       
     );
}
 
export default Gener;