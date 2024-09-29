import Header from "./Header";
import Footer from "./Footer"
import {useSection} from "../contexts/SectionContext";

const MovieDetails = () => {
    const {dark} = useSection()
    return ( 
            <div className={`flex flex-col items-center w-full min-w-[1024px] font-normal ${dark? 'text-text_main':'text-card_black'}`}>
                <Header />
                <div className={`flex flex-col w-full min-w-[1024px] max-w-[1440px] px-[63px] py-[30px] h-[660px] ${dark? 'bg-bg': 'bg-text_main'}`}>
                    <div className="flex w-full h-[398px]">
                        <div className="grid grid-cols-3 w-full">

                            <div className= {`flex flex-col items-start w-[268px] h-full p-[3px] rounded-[6px] ${dark? 'bg-text_main' : 'bg-card_black'}`}>
                                <img className="w-full h-full rounded-[3px]" src="/del/Trapped.png" alt="" />
                            </div>
                                                         
                                <div className="flex flex-col justify-between w-full">
                                    {/* detail */}
                                    <div className="flex flex-col justify-between w-[286px] h-[156px]">
                                        <h1 className="text-[24px] font-semibold text-left">Trapped in the Rocky Mountains</h1>
                                        <div className="flex justify-start gap-[36px]"><span className="text-inactive">2024</span><span className="text-text_yelow font-semibold">Thriller</span></div>
                                        <div className="flex justify-between items-center w-full text-[14px]">
                                            <img className="w-[41.5px] h-[20px]" src="/icons/imdb.png" alt="" />
                                            <p className="text-[14px]"><span className="font-bold">9.1</span>/10</p>
                                            <div className="flex justify-between items-center w-[46px]">
                                                <img className="h-[13px] w-[13.5px]" src="/icons/star.png" alt="" />
                                                <p>139</p>
                                            </div>
                                            <div className="flex justify-between items-center w-[46px]">
                                                <img className="w-[13px] h-[11.5px]" src="/icons/like.png" alt="" />
                                                <p>58</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* trailer */}
                                    <div className="flex flex-col justify-between w-[320px] h-[202px]">
                                        <h2 className="text-[15px] align-text-top text-left h-[20px] font-semibold text-inactive">Trailer</h2>
                                        <div className="h-[176px]">
                                            <video 
                                             className=" rounded-l shadow-lg"
                                             controls
                                             preload="auto"
                                             >
                                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                                Your browser does not support the video.
                                            </video>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col justify-between items-end w-full">
                                    {/* similar movies */}
                                    <div className={`flex flex-col justify-between p-2 w-[276px] h-[156px] ${dark? 'bg-card_black':'bg-text_main'}`}>
                                        <h2 className="text-[14px] font-medium h-[20px] align-text-top mb-[6px] text-inactive">Similar Movies</h2>
                                        <div className="flex justify-between h-[114px]">
                                            <div className={`h-full p-[2px] ${dark? 'bg-text_main':'bg-card_black'}`}>
                                                <img className="h-full" src="/del/Tatami.jpg" alt="similar movie" />
                                            </div>
                                            <div className={`h-full p-[2px] ${dark? 'bg-text_main':'bg-card_black'}`}>
                                                <img className="h-full" src="/del/EVOL.png" alt="similar movie" />
                                            </div>
                                            <div className={`h-full p-[2px] ${dark? 'bg-text_main':'bg-card_black'}`}>
                                                <img className="h-full" src="/del/Tatami.jpg" alt="similar movie" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* plot summary */}
                                    <div className="w-[265px] h-[202px]">
                                        <h2 className="text-[15] font-semibold text-left">Plot summary</h2>
                                        <p className="text-[15] text-left text-inactive my-1 leading-[18px]">Lured into an unwelcome reunion at a vacant ski lodge, former college friends fight to escape alive as they are targeted by an unseen adversary, and long-buried secrets may hold the truth about who’s pulling the strings.</p>
                                        <p className="text-[15] text-justify text-inactive my-1">Uploaded by: FREEMAN</p>
                                        <p className="text-[15] text-justify text-inactive my-1">September 23, 2024 at 08:22 PM</p>
                                    </div>
                                </div>
                                
                            
                        </div>
                    </div>

                    <div className="flex justify-between mt-[60px]">
                        <div className="flex flex-col justify-between items-start text-start w-[111px] h-[140px]">
                            <h1>Director</h1>
                            <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
                                <img className="W-[59px] h-[59px]" src="/del/cast.png" alt="" />
                                <p>Patricia Frontain</p>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-between w-[630px] h-[140px] items-start">

                            <h1>Top Cast</h1>
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
                                    <img className="W-[59px] h-[59px]" src="/del/cast.png" alt="" />
                                    <p>Patricia Frontain</p>
                                </div>

                                <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
                                    <img className="W-[59px] h-[59px]" src="/del/cast.png" alt="" />
                                    <p>Patricia Frontain</p>
                                </div>

                                <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
                                    <img className="W-[59px] h-[59px]" src="/del/cast.png" alt="" />
                                    <p>Patricia Frontain</p>
                                </div>

                                <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
                                    <img className="W-[59px] h-[59px]" src="/del/cast.png" alt="" />
                                    <p>Patricia Frontain</p>
                                </div>

                                <div className="flex flex-col justify-between w-full items-start h-[90px] text-[14px] font-semibold text-inactive">
                                    <img className="W-[59px] h-[59px]" src="/del/cast.png" alt="" />
                                    <p>Patricia Frontain</p>
                                </div>

                            </div>
                        </div>
                    </div>


    
                </div> 
                <Footer /> 
                              
            </div>
     );
}
 
export default MovieDetails;