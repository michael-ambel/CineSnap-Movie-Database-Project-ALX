import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trending = ({dark, url, name, time, movie}) => {

    const [trending, setTrending] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const m = movie;

    useEffect(() => {
        const trendingHandler = async () => {

            setIsLoading(true)
            setError(null)

            try{
                const trendingRes = await fetch(url)
                const trendingData = await trendingRes.json()

                if(!trendingRes.ok){
                    throw Error('Can not fetch this weeks trendig movies')
                }

                setTrending(trendingData.results.slice(0,3))
                setIsLoading(false)
    
            }
            catch(error){
                setError(error.message)
                setIsLoading(false)   
            }
        }

        trendingHandler()
    }, [])
    return ( 
        <div id={movie? 'movies':'tvshows'} className={`flex flex-col lg:flex-row justify-between items-center p-4  h-auto w-full mt-[10px] rounded-[8px] ${dark? 'bg-card_black' : 'bg-[#F5F5F5]'}`}>
                        <div className="flex flex-col justify-center items-center lg:h-full ">
                            <span className="lg:mb-[80px] lg:mt-[50px] flex justify-center text-[24px] items-center w-[148px] h-[45px] text-text_red font-semibold">{name}</span>
                        </div>
                        {trending && 
                        <div className="flex flex-col h-full xl:w-[800px] gap-4 justify-between">
                            <span className='text-inactive text-[17px]'>{time}</span>
                            <div className="flex flex-col md:flex-row h-full gap-4 ">
                                {trending.map(t =>(
                                    <Link to={m? `/movie/${t.id}` : `/tvshow/${t.id}`} key={t.id} className={`flex flex-col justify-between h-full w-full gap-3 text-[16px] ${dark? 'text-text-main' : 'text-card_black'}`}>
                                        <div className="h-[240px] rounded-sm overflow-hidden flex items-center justify-center duration-500 hover:scale-105">
                                            <img className="h-full w-auto object-cover" src={`https://image.tmdb.org/t/p/w500${t.backdrop_path}`} alt="" />
                                        </div>
                                        <div>
                                        {movie && <p>{t.title} </p>}
                                        {!movie && <p>{t.name}</p>}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        }
                    </div>
     );
}
 
export default Trending;