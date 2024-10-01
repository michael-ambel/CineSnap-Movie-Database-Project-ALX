import Header from "./Header";
import Footer from "./Footer"
import {useSection} from "../contexts/SectionContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";



const TvShowDetails = () => {
    const [detail, setDetail] = useState({})
    const [trailerLink, setTrailerLink] = useState(null)
    const [isReady, setIsReady] = useState(false)
    const [noTrailer, setNoTrailer] = useState(false)

    const [director, setDirector] = useState(null)
    const [casts, setCasts] = useState(null)
    const [similar, setSimilar] = useState(null)

    

    const posterUrlSm = 'https://image.tmdb.org/t/p/w185'

    const p = useParams()

   
    const {dark} = useSection()
    const {apiKey} = useSearchContext()

    const trailerReset =()=> {
        setTrailerLink(null)
    }

    const dateYear = (t) => {
        const date = new Date(t);
       return date.getFullYear()
    }

    const genres = (e) => {
        if(e){
            return e.map(e => e.name).join(', ')
        }     
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        
        const movieDetail = async (id) => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)
                const detail = await response.json()
                setDetail(detail)
                

                //trailer 
                const videoRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`)
                const videoData = await videoRes.json()
                const trailerData = videoData.results.find(v => v.type === 'Trailer')
                if(videoRes.ok){
                    setTrailerLink(`https://www.youtube.com/embed/${trailerData.key}`)
                    setIsReady(true)
                    setNoTrailer(false)
                    
                }
                

                //credits
                const creditsRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`)
                const creditsData = await creditsRes.json()

                const Director = creditsData.crew.find(d => d.department === "Directing")
                if(creditsRes.ok){
                    setDirector(Director)  
                    setCasts(creditsData.cast.slice(0, 12))
                }

                //similar
                const similarRsp = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}`)
                const similarData = await similarRsp.json()
                
                const Similar = similarData.results.slice(0,3)
                if(similarRsp.ok){
                    setSimilar(Similar)
                }

            }
            catch(error){
                console.log(error.message);
            }
        }

        movieDetail(p.id)

        
    },[p.id])
    return ( 
            <div className={`flex flex-col items-center w-full min-w-[1024px] font-normal ${dark? 'text-text_main':'text-card_black'}`}>
                <Header />
                {!detail && <div>Loading....</div>}
                {detail && 
                <div className={`flex flex-col w-full min-w-[1024px] max-w-[1440px] px-[63px] py-[30px] h-auto ${dark? 'bg-bg': 'bg-text_main'}`}>
                    <div className="flex w-full h-[420px]">
                        <div className="flex justify-between h-auto w-full">

                            <div className= {`flex flex-col jus items-start w-auto h-full p-[3px] rounded-[6px] ${dark? 'bg-text_main' : 'bg-card_black'}`}>
                                <img className="w-auto h-full rounded-[3px]" src={`${posterUrlSm}${detail.poster_path}`} alt="" />
                            </div>
                                                        
                                <div className="flex flex-col justify-between  min-gap-2 h-full w-[520px]">
                                    {/* detail */}
                                    <div className="flex flex-col justify-between w-[340px] h-auto gap-2">
                                        <h1 className="text-[24px] font-semibold text-left">{detail.name}</h1>
                                        <div className="flex justify-start gap-[36px]"><span className="text-inactive">{dateYear(detail.first_air_date)}</span><span className="text-text_yelow font-semibold">{genres(detail.genres)}</span></div>
                                        <div className="flex justify-between items-center w-full text-[14px]">
                                            <img className="w-[41.5px] h-[20px]" src="/icons/imdb.png" alt="" />
                                            <p className="text-[14px]"><span className="font-bold">{Math.round(detail.vote_average*10)/10}</span>/10</p>
                                            <div className="flex justify-between items-center w-[46px]">
                                                <img className="h-[13px] w-[13.5px]" src="/icons/star.png" alt="" />
                                                <p>{detail.vote_count}</p>
                                            </div>
                                            <div className="flex justify-between items-center w-[46px]">
                                                <img className="w-[13px] h-[11.5px]" src="/icons/like.png" alt="" />
                                                <p>...</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* trailer */}
                                    <div className="flex flex-col justify-between w-[520px] h-auto">
                                        <h2 className="text-[15px] align-text-top text-left h-[20px] font-semibold text-inactive">Trailer</h2>
                                        <div className="flex justify-center items-center w-full h-auto mt-[10px]">
                                            <div className="flex flex-col justify-center items-center h-full w-auto">
                                                {isReady && (
                                                    <iframe
                                                        width="520"
                                                        height="260"
                                                        src={trailerLink}
                                                        title={detail.title}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"   
                                                        allowFullScreen
                                                    ></iframe>
                                                )}
                                                {!isReady && <p className="w-full h-full">Loading video...</p>}
                                                {noTrailer && <p className="w-full h-full">The Movie has no trailer...</p>}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col justify-between items-end w-[266px]">
                                    {/* similar movies */}
                                    <div className={`flex flex-col justify-between p-2 min-w-[266px] h-auto ${dark? 'bg-card_black':'bg-text_main'}`}>
                                        <h2 className="text-[14px] font-medium h-[20px] align-text-top mb-[6px] text-inactive">Similar Tv</h2>
                                        <div className="flex justify-between h-[114px]">
                                            
                                            {similar && 
                                            similar.map(smlr => (
                                                <Link to={`/tvshow/${smlr.id}`} onClick={trailerReset}>
                                                    <div className={`h-full p-[2px] duration-500 hover:scale-105 ${dark? 'bg-text_main':'bg-card_black'}`}>
                                                        <img className="h-full" src={`${posterUrlSm}${smlr.poster_path}`} alt="similar movie" />
                                                    </div>
                                                </Link>
                                            ))}
                                            
                                        </div>
                                    </div>

                                    {/* plot summary */}
                                    {detail &&
                                        <div className="w-[266px] h-auto">
                                            <h2 className="text-[15] font-semibold text-left">Plot summary</h2>
                                            <p className="text-[15] text-left text-inactive my-1 leading-[18px]">{detail.overview}</p>
                                            <p className="text-[15] text-justify text-inactive my-1"><span className="text-text_red">Status: </span>{detail.status}</p>
                                            <p className="text-[15] text-justify text-inactive my-1"><span className="text-text_red">Date: </span>{detail.release_date}</p>
                                    </div>}
                                </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-[60px]">
                        <div className="flex flex-col justify-start items-center text-start w-[111px] h-[260px]">
                            <h1>Director</h1>
                            <div className="flex flex-col justify-between w-full items-center h-[90px] text-[14px] font-semibold text-inactive">
                                    {director && 
                                    <div className="flex flex-col justify-between items-center">
                                        <div className="w-[59px] h-[59px] mt-4 mb-2 rounded-full flex items-center justify-center overflow-hidden bg-text_main">
                                            <img className="h-auto w-full object-fill" src={director.profile_path? `https://image.tmdb.org/t/p/w500/${director.profile_path}` : '/del/cast.png' } alt="" />
                                        </div>
                                        <p>{director.name}</p>
                                    </div>
                                    }
                                </div>
                        </div>
                        <div className=" flex flex-col justify-between w-[630px] h-[140px] items-start">

                            <h1>Top Cast</h1>
                            {casts && 

                            
                                <div className="grid grid-cols-6 min-gap-4 w-full justify-between mt-4">
                                    {casts.map(cast => (
                                        <div className="flex flex-col justify-between w-full items-start h-[120px] text-[14px] font-semibold text-inactive">
                                            {cast && 
                                            <div>
                                                <div className="w-[59px] h-[59px] mt-4 mb-2 rounded-full flex items-center justify-center overflow-hidden bg-text_main">
                                                    <img className="h-auto w-full object-fill" src={cast.profile_path? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`: '/del/cast.png' } alt="" />
                                                </div>
                                                <p>{cast.name}</p>
                                            </div>
                                            }
                                        </div>
                                    ))}
                                </div>
                            
                                
                            }
                        </div>
                    </div>



                </div> 
            }
                <Footer /> 
                              
            </div>
     );
}
 
export default TvShowDetails;