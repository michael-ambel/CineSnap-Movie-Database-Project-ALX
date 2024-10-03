import { useEffect, useState } from "react";
import { useSection } from "../contexts/SectionContext";
import { useSearchContext } from "../contexts/SearchContext";
import Trending from "./subGroup/Trending";
import Catagory from "./subGroup/Catagory";
import { Link } from "react-router-dom";


const Hero  = () => {
    const {searchBtn, apiKey} = useSearchContext()
    

    const {dark, moviesRef,} = useSection();



    useEffect(() => {

    }, [])
    return ( 
        <div className={`w-full flex flex-col items-start justify-start p-[14px] md:px-[36px] lg:px-[62px] ${ dark? 'bg-bg' : 'bg-text_main'} ${searchBtn? 'hidden' : 'block'}`}>
            <div className="flex w-full mx-auto items-start justify-between">

                {/*Geners list */}
                <div className="hidden fixed md:flex flex-col justify-start top-[130px] h-[340px] w-[90px]">
                    <p className={`w-[80px] h-[16px] text-start font-bold mb-[21px] ${dark? 'text-text_main' : 'text-card_black'}`}>Gener</p>
                    <ul className={`flex flex-col justify-between w-[90px] h-[243px] mb-[40px] text-start text-[13px] font-light ${dark? 'text-inactive' : 'text-card_black'}`}>
                        <li><Link to='/gener/Action'><button>Action</button></Link></li>
                        <li><Link to='/gener/Sci-Fi'><button>Sci-Fi</button></Link></li>
                        <li><Link to='/gener/Fantasy'><button>Fantasy</button></Link></li>
                        <li><Link to='/gener/Comedy'><button>Comedy</button></Link></li>
                        <li><Link to='/gener/Horror'><button>Horror</button></Link></li>
                        <li><Link to='/gener/Adventure'><button>Adventure</button></Link></li>
                        <li><Link to='/gener/Drama'><button>Drama</button></Link></li>
                        
                    </ul>
                    <button className="w-[54px] h-[17px] text-[14px] font-semibold text-text_yelow">Log Out</button>
                </div>
                <div className="md:ml-[143px] lg:ml-[120px] w-full">

                    {/*Movies */}
                    {/*Tending Now */}
                    <Trending 
                    dark = {dark} 
                    moviesRef = {moviesRef} 
                    movie = {true}
                    name = {'Movie'}
                    time = {'Trending of The Week'}
                    url = {`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`}/>



                    {/*popular */}
                    <Catagory 
                    dark = {dark} 
                    title = {"Popular"} 
                    movie = {true}
                    url ={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`} 
                    posterUrlSm = {'https://image.tmdb.org/t/p/w185'}
                    apiKey = {import.meta.env.VITE_API_KEY}  />
                    





                    {/*New Arrivals */}
                    {/* <Catagory 
                    dark = {dark} 
                    title = {"New Arrivals"} 
                    url ={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.asc&primary_release_date.gte=${today}`} 
                    posterUrlSm = {'https://image.tmdb.org/t/p/w185'}
                    apiKey = {import.meta.env.VITE_API_KEY}  
                    />
                     */}
                
                    {/*Most Watched */}
                    <Catagory 
                    dark = {dark} 
                    title = {"Most Watched"} 
                    movie = {true}
                    url ={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`} 
                    posterUrlSm = {'https://image.tmdb.org/t/p/w185'}
                    apiKey = {import.meta.env.VITE_API_KEY}  />


                    {/*Top Rated */}
                    <Catagory 
                    dark = {dark} 
                    title = {"Top Rated"} 
                    movie = {true}
                    url ={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`} 
                    posterUrlSm = {'https://image.tmdb.org/t/p/w185'}
                    apiKey = {import.meta.env.VITE_API_KEY}  />

                    <div className="h-[80px]"></div>

                    {/*TV Shows */}
                    {/*Tending Now */}
                    <Trending 
                    dark = {dark} 
                    moviesRef = {moviesRef} 
                    movie = {false}
                    name = {'Tv Show'}
                    time = {'Trending of The Week'}
                    url = {`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`}/>


                    {/*Top Rated */}
                    <Catagory 
                    dark = {dark} 
                    title = {"Popular"} 
                    movie = {false}
                    url ={`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`} 
                    posterUrlSm = {'https://image.tmdb.org/t/p/w185'}
                    apiKey = {import.meta.env.VITE_API_KEY}  />


                    {/*Top Rated */}
                    <Catagory 
                    dark = {dark} 
                    title = {"Top Rated"} 
                    movie = {false}
                    url ={`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`} 
                    posterUrlSm = {'https://image.tmdb.org/t/p/w185'}
                    apiKey = {import.meta.env.VITE_API_KEY}  />


                </div>
            </div>

            
        </div>
     );
}
 
export default Hero ;