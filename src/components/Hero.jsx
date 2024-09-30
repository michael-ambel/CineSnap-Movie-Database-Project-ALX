import { useEffect, useState } from "react";
import { useSection } from "../contexts/SectionContext";
import { Link } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";


const apiKey = import.meta.env.VITE_API_KEY
const apiAccessToken = import.meta.env.VITE_API_READ_ACCESS_TOKEN
const baseURL ='https://api.themoviedb.org/3'
const posterUrlSm = 'https://image.tmdb.org/t/p/w185'


const Hero  = () => {
    const {searchBtn} = useSearchContext()
    const [popular, setPopular] = useState([])
    const [popularLoading, setPopularLoading] = useState(false)
    const [popularError, setPopularError] = useState(null)

    const {dark, moviesRef, tvShowsRef} = useSection();

    useEffect(() => {
        const fetchPopular = async () => {
            try{
                setPopularLoading(true)
                setPopularError(null)

                const response = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}`)
                const data = await response.json()

                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                  }               
                setPopular(data.results)
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
        <div className={`w-full flex flex-col items-start justify-start px-[62px] ${ dark? 'bg-bg' : 'bg-text_main'} ${searchBtn? 'hidden' : 'block'}`}>
            <div className="flex w-full mx-auto items-start justify-between">

                {/*Geners list */}
                <div className="fixed flex flex-col justify-start top-[130px] h-[340px] w-[90px]">
                    <p className={`w-[80px] h-[16px] text-start font-bold mb-[21px] ${dark? 'text-text_main' : 'text-card_black'}`}>Gener</p>
                    <ul className={`flex flex-col justify-between w-[90px] h-[243px] mb-[40px] text-start text-[13px] font-light ${dark? 'text-inactive' : 'text-card_black'}`}>
                        <li><button>Action</button></li>
                        <li><button>Sci-Fi</button></li>
                        <li><button>Fantasy</button></li>
                        <li><button>Horror</button></li>
                        <li><button>Adventure</button></li>
                        <li><button>Mystery</button></li>
                        <li><button>More..</button></li>
                    </ul>
                    <button className="w-[54px] h-[17px] text-[14px] font-semibold text-text_yelow">Log Out</button>
                </div>
                <div className="ml-[173px] w-full">

                    {/*Movies */}
                    {/*Tending Now */}
                    <div id="movies" ref={moviesRef} className={`flex justify-around items-center  h-[350px] w-full mt-[10px] rounded-[8px] ${dark? 'bg-card_black' : 'bg-[#F5F5F5]'}`}>
                        <div className="flex flex-col items-center h-full ">
                            <span className="mb-[100px] mt-[30px] flex justify-center items-center w-[148px] h-[45px] text-text_yelow font-bold">Movies</span>
                            <span className={dark? 'text-text_main' : 'text-card_black'}>Tending Now</span>
                        </div>
                        <div className="flex justify-center h-full p-4">
                            <img className="object-cover" src="\del\TendingNow.png" alt="" />
                        </div>
                    </div>



                    {/*Top Rated */}
                    <div className="flex flex-col w-full h-auto mt-[34px]">
                        <div className="h-auto pb-[14px]">
                            <p className={`h-[19px] font-bold text-[18px] my-[20px] ${dark? 'text-text_main':'text-card_black'}`}>Popular</p>
                        </div>

                        <div>
                            {popularLoading && <div>Loading...</div>}
                            {popularError && <div>{popularError}</div>}
                            {popular && 
                            <div>
                                <ul className="grid grid-cols-5 w-full gap-[38px]">
                                    {popular.map((movie) => (
                                        <li key={movie.id}>
                                            <Link to={`/detail/${movie.id}`} className="flex flex-col items-start h-[300px] w-[153px]">
                                                <div className={`w-full p-[3px] h-[228px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
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





                    {/*New Arrivals */}
                    <div className="flex flex-col w-full h-[316px] mt-[34px]">
                        <div className="h-[36px] pb-[14px]">
                            <p className="h-[19px] mb-[14px]">New Arrivals</p>
                        </div>

                        <div className="flex justify-between w-full space-x-[38px]">

                        <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>The Crucible</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>The Crucible</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] h-[222px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>Movie Name</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] h-[222px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>Movie Name</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}> 9.0</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                    </div>
                
                    {/*Most Watched */}
                    <div className="flex flex-col w-full h-[316px] mt-[34px]">
                        <div className="h-[36px] pb-[14px]">
                            <p className="h-[19px] mb-[14px]">Most Watched</p>
                        </div>

                        <div className="flex justify-between w-full space-x-[38px]">
                          
                        <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>The Crucible</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>The Crucible</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] h-[222px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>Movie Name</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] h-[222px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>Movie Name</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}> 9.0</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                    </div>


                    {/*TV Shows */}
                    {/*Tending Now */}
                    <div id="tvshows" ref={tvShowsRef} className={`flex justify-around items-center  h-[350px] w-full mt-[10px] rounded-[8px] ${dark? 'bg-card_black' : 'bg-inactive'}`}>
                        <div className="flex flex-col items-center h-full ">
                            <span className="mb-[100px] mt-[30px] flex justify-center items-center w-[148px] h-[45px] text-text_yelow font-bold">Tv Shows</span>
                            <span className={dark? 'text-text_main' : 'text-card_black'}>Tending Now</span>
                        </div>
                        <div className="flex justify-center h-full p-4">
                            <img className="object-cover" src="\del\TendingNow.png" alt="" />
                        </div>
                    </div>


                    {/*Top Rated */}
                    <div className="flex flex-col w-full h-[316px] mt-[34px]">
                        <div className="h-[36px] pb-[14px]">
                            <p className="h-[19px] mb-[14px]">Top Rated</p>
                        </div>

                        <div className="flex justify-between w-full space-x-[38px]">
                                                     
                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>The Crucible</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>The Crucible</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] h-[222px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>Movie Name</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}>9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className={`w-full p-[2px] h-[222px] rounded-[4px] ${dark? 'bg-text_main' : 'bg-card'}`}>
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1 className={dark? 'text-text_main' : 'text-card_black'}>Movie Name</h1>
                                <div className="flex w-full justify-between text-[14px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className={`text-[14px] ${dark? 'text-text_main' : 'text-card'}`}> 9.0</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                    </div>


                </div>
            </div>

            
        </div>
     );
}
 
export default Hero ;