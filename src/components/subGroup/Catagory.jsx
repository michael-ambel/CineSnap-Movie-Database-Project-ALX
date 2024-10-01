import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Catagory = ({dark, title, url, posterUrlSm, movie}) => {

    const [popular, setPopular] = useState(null)
    const [popularLoading, setPopularLoading] = useState(false)
    const [popularError, setPopularError] = useState(null)
    const m = movie

    useEffect(() => {
        const fetchPopular = async () => {
            try{
                setPopularLoading(true)
                setPopularError(null)

                const response = await fetch(url)
                const data = await response.json()

                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                  }               
                setPopular(data.results.slice(0,10))
                setPopularLoading(false)
                setPopularError(null)
            
            }
            catch(error){
                setPopularError(error.message)
            }
            finally{
                setPopularLoading(false)
            }
        }
        fetchPopular();

    }, [])


    return ( 
        <div className="flex flex-col w-full h-auto mt-[34px]">
                        <div className="h-auto pb-[14px]">
                            <p className={`h-[19px] font-bold text-[18px] my-[20px] ${dark? 'text-text_main':'text-card_black'}`}>{title}</p>
                        </div>

                        <div>
                            {popularLoading && <div>Loading...</div>}
                            {popularError && <div>{popularError}</div>}
                            {popular && 
                            <div>
                                <ul className="grid grid-cols-5 w-full gap-[38px]">
                                    {popular.map(movie => (
                                        <li key={movie.id}>
                                            <Link to={m? `/movie/${movie.id}` : `/tvshow/${movie.id}`} className="flex flex-col items-start h-[300px] w-[153px]">
                                                <div className={`w-full p-[3px] h-[228px] rounded-[4px] duration-500 hover:scale-105 ${dark? 'bg-text_main' : 'bg-card'}`}>
                                                    <img src={movie.poster_path? `${posterUrlSm}${movie.poster_path}`: `\del\EVOL.png`} alt="" />  
                                                </div>
                                                <h1 className={`text-[14px] font-bold py-1 ${dark? 'text-text_main' : 'text-card_black'}`}>{m? movie.title : movie.name}</h1>
                                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                                    <p>{new Date(movie.first_air_date || movie.release_date).getFullYear()}</p>
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
 
export default Catagory;