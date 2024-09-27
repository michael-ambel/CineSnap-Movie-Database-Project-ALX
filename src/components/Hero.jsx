const Hero  = () => {
    return ( 
        <div className="w-full flex flex-col items-start justify-start bg-bg pb-[80px] px-[62px]">
            <div className="flex w-full mx-auto items-start justify-between">

                {/*Geners list */}
                <div className="fixed flex flex-col justify-start top-[130px] h-[340px] w-[90px]">
                    <p className="w-[80px] h-[16px] text-start font-bold mb-[21px]">Gener</p>
                    <ul className="flex flex-col justify-between w-[90px] h-[243px] mb-[40px] text-start text-[13px] text-inactive font-light">
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
                    <div id="movies" className="flex justify-around items-center  h-[350px] w-full mt-[10px] bg-card_black rounded-[8px]">
                        <div className="flex flex-col items-center h-full ">
                            <span className="mb-[100px] mt-[30px] flex justify-center items-center w-[148px] h-[45px] text-text_yelow font-bold">Movies</span>
                            <span>Tending Now</span>
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
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>


                    {/*New Arrivals */}
                    <div className="flex flex-col w-full h-[316px] mt-[34px]">
                        <div className="h-[36px] pb-[14px]">
                            <p className="h-[19px] mb-[14px]">New Arrivals</p>
                        </div>

                        <div className="flex justify-between w-full space-x-[38px]">
                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
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
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>


                    {/*TV Shows */}
                    {/*Tending Now */}
                    <div id="tvshows" className="flex justify-around items-center  h-[350px] w-full mt-[70px] bg-card_black rounded-[8px]">
                        <div className="flex flex-col items-center h-full ">
                            <span className="mb-[100px] mt-[30px] flex justify-center items-center w-[148px] h-[45px] text-text_yelow font-bold">Tv Shows</span>
                            <span>Tending Now</span>
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
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\The Crucible.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\EVOL.png" alt="" />
                                </div>
                                <h1>The Crucible</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-[153px]">
                                <div className="w-full h-[222px] bg-text_main p-[2px] rounded-[4px]">
                                    <img src="\del\card-image.png" alt="" />
                                </div>
                                <h1>Movie Name</h1>
                                <div className="flex w-full justify-between text-[12px] text-inactive">
                                    <p>2024</p>
                                    <div className="flex items-center">
                                        <img className="w-[13px] h-[13px] mr-[6px] " src="\icons\star.png" alt=""/>
                                        <p className="text-[14px] text-text_main">9.0</p>
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