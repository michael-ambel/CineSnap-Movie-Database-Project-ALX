import Header from "./Header";
import Footer from "./Footer"
import {useSection} from "../contexts/SectionContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";



const MovieDetails = () => {
    const [detail, setDetail] = useState({})
    const [trailerLink, setTrailerLink] = useState(null)
    const [isReady, setIsReady] = useState(false)
    const [noTrailer, setNoTrailer] = useState(false)
    const [error, setError] = useState(null)
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
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
                const detail = await response.json()

            if(response.ok){
                setError(null)
                setDetail(detail)

            }
            
                //trailer
                const videoRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
                const videoData = await videoRes.json()
                const trailerData = videoData.results.find(v => v.type === 'Trailer')

                
                if(videoRes.ok){
                    setTrailerLink(`https://www.youtube.com/embed/${trailerData.key}`)
                    setIsReady(true)
                    setNoTrailer(false)
                }
                
                

                //credits
                const creditsRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
                const creditsData = await creditsRes.json()
                
                const Director = creditsData.crew.find(d => d.department === "Directing")
                if(creditsRes.ok){
                    setDirector(Director)  
                    setCasts(creditsData.cast.slice(0, 12))
                }

                //similar
                const similarRsp = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
                const similarData = await similarRsp.json()
                
                const Similar = similarData.results.slice(0,3)
                if(similarRsp.ok){
                    setSimilar(Similar)
                }  

            }
            catch(error){
                setError(error.message)
            }
        }

        movieDetail(p.id)

        
    },[p.id])
    return ( 
            <div className={`flex flex-col items-center w-full font-normal ${dark? 'text-text_main':'text-card_black'}`}>
                <Header />
                {!detail && <div>Loading....</div>}
                {error && <div>error</div>}
                {detail && 
                <div className={`flex flex-col  w-full max-w-[1440px] p-[14px] md:px-[36px] lg:px-[62px] h-auto ${dark? 'bg-bg': 'bg-text_main'}`}>
                    
                    <div className="grid grid-cols-12  gap-6 w-full h-auto  mb-[30px] justify-between items-start">
                        

                        <div className="flex h-full w-auto lg:h-auto ld:w-full justify-between col-span-12 md:col-span-4 lg:col-span-3">
                            <div className="flex flex-col w-auto h-full md:h-auto md:w-full justify-between ">
                                <h1 className="hidden md:flex pb-[10px] text-[20px] font-semibold text-inactive text-left">{detail.title}</h1>
                                <div className= {`flex flex-col items-center w-auto h-full p-[3px] rounded-[6px] ${dark? 'bg-text_main' : 'bg-card_black'}`}>
                                    <img className="w-full h-auto rounded-[3px]" src={`${posterUrlSm}${detail.poster_path}`} alt="" />
                                </div>
                            </div>

                            <div className="flex md:hidden flex-col justify-between md:w-[340px] h-full px-[10px] gap-2">
                                <h1 className="text-[24px] text-inactive font-semibold text-left">{detail.title}</h1>
                                <div className="flex flex-col justify-start gap-[16px]"><span className="text-inactive">{dateYear(detail.release_date)}</span><span className="text-text_yelow font-semibold">{genres(detail.genres)}</span></div>
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
                            </div>
                                                        
                            <div className="col-span-12 md:col-span-8 lg:col-span-6 justify-between h-full ">
                            {/* detail */}
                                <div className="hidden md:flex flex-col justify-between md:pb-2 w-[300px] gap-[20px]">                                    
                                    <div className="flex flex-col items-start justify-between gap-[10px] "><span className="text-inactive">{dateYear(detail.release_date)}</span><span className="text-text_yelow font-semibold">{genres(detail.genres)}</span>
                                    </div>
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
                                <div className="flex flex-col justify-between w-full h-auto">
                                    <h2 className="text-[15px] text-left h-[20px] font-semibold text-inactive">Trailer</h2>
                                    <div className="flex justify-between items-center w-full h-auto mt-[10px]">
                                        
                                        {isReady && (
                                            <iframe
                                                width='100%'
                                                className="h-[200px] md:h-[250px] lg:h-[240px] xl:h-[300px]"
                                                src={trailerLink}
                                                title={detail.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"   
                                                allowFullScreen
                                            ></iframe>
                                        )}
                                        {!isReady && <p className="w-full h-full">Loading video...</p>}
                                        {noTrailer && <p className="w-full h-full">No trailer available...</p>}
                                    </div>
                                </div>
                            </div>


                                <div className="flex flex-col md:flex-row lg:flex-col col-span-12 lg:col-span-3 justify-between gap-4 lg:items-end text-[14px] w-full ">
                                    {/* similar movies */}
                                    <div className={`flex flex-col justify-between w-full p-2 h-auto ${dark? 'bg-card_black':'bg-text_main'}`}>
                                        <h2 className="text-[14px] font-medium h-[14px] text-center mb-[14px] text-inactive">Recommendation </h2>
                                        <div className="flex justify-between h-[160px] md:h-[130px] lg:h-[96px]">
                                            {similar && 
                                            similar.map(smlr => (
                                                <Link to={`/movie/${smlr.id}`} onClick={trailerReset}>
                                                    <div className={`h-full p-[2px] duration-500 hover:scale-105 ${dark? 'bg-text_main':'bg-card_black'}`}>
                                                        <img className="h-full" src={`${posterUrlSm}${smlr.poster_path}`} alt="similar movie" />
                                                    </div>
                                                </Link>
                                            ))}
                                            
                                        </div>
                                    </div>

                                    {/* plot summary */}
                                    {detail &&
                                    <div className="w-full h-auto">
                                        <h2 className="text-[15] font-semibold text-left">Plot summary</h2>
                                        <p className="text-[15] text-left text-inactive my-1 leading-[18px]">{detail.overview}</p>
                                        <p className="text-[15] text-justify text-inactive my-1"><span className="text-text_red">Status: </span>{detail.status}</p>
                                        <p className="text-[15] text-justify text-inactive my-1"><span className="text-text_red">Date: </span>{detail.release_date}</p>
                                    </div>}
                                </div>
                            </div>

                    <div className="flex flex-col md justify-between mt-[40px]">
                        <div className="flex flex-col justify-start items-start text-start w-[111px] h-[140px]">
                            <h1>Director</h1>
                            <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
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
                        <div className=" flex flex-col justify-between w-full h-auto items-start">

                            <h1>Top Cast</h1>
                            {casts && 

                            
                                <div className="flex flex-wrap gap-4 w-full justify-evenly mt-4">
                                    {casts.map(cast => (
                                        <div className="flex flex-col justify-between w-[60px] items-start h-[120px] text-[14px] font-semibold text-inactive">
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
 
export default MovieDetails;