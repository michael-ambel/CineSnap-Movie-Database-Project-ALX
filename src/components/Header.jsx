import { useEffect, useState } from "react";
import { useSection } from "../contexts/SectionContext";
import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";

const Header  = () => {
    const navigate = useNavigate()
    
    const {searchIn, setSearchIn, newSearch, setNewSearch } = useSearchContext()

    const {activeSection, setActiveSection, dark, setDark, homeRef, moviesRef, tvShowsRef} = useSection();

    const themeHandler = (e) => {
        e.preventDefault()
        setDark(!dark)
    }

    


    useEffect(() => {
        
        setNewSearch(false)

      }, [])

      const newSearchHandler = () => {
        setNewSearch(!newSearch)
    }

      function scrollToSection(section) {
        navigate(`/#${section}`)
        setSearchIn('')

        const element = document.getElementById(section);

        if (!element) {
            return;
        }
        const yOffset = -130; 
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
        window.scrollTo({ top: y, behavior: 'smooth' });

        setActiveSection(section);
      }

    return ( 
        <div className={dark? "sticky top-0 h-[130px] w-full max-w-[1440px] mx-auto min-w-[1024px] bg-bg flex items-center justify-between px-[62px] py-[52px]" : "sticky top-0 h-[130px] w-[100%] max-w-[1440px] mx-auto min-w-[1024px] bg-text_main flex items-center justify-between px-[62px] py-[52px]"}>
            <span className={dark? "text-[26px] font-light" : "text-[26px] font-light text-card"}>Cine<span className="font-bold text-text_red">Snap</span></span>
            <form className="flex items-center justify-between w-[299px] h-[28px]">
               
                <input 
                type="text" 
                placeholder="Search Movie/Tv Show Here" 
                onChange={(e) => {
                    setSearchIn(e.target.value)
                }}
                value = {searchIn}
                className={`text-center px-3 w-[245px] h-[30px] rounded-[39px] placeholder:font-light font-normal border-[2px]  border-none outline-none placeholder:text-inactive ${dark? "bg-text_main text-card_black" : "bg-card_black text-text_main"}`}  />
                <Link to = '/search'><button onClick={newSearchHandler} ><img className="w-[28px] h-[28px] bg-transparent" src="/icons/search.png" alt="" /></button></Link>
            </form>
            <nav>
                <ul className={`flex items-center justify-between w-[270px] h-[28px] text-[16px] font-normal ${dark? "text-text_main" : "text-card_black"}`}>
                    {/* <button className= {`w-[80px] rounded-full ${activeSection === 'home' ? "border-text_red border-[1px]" : "border-none"}`} onClick={() => scrollToSection('movies')}>Home</button> */}
                    <button className= {`w-[80px] rounded-full`} onClick={() => scrollToSection('movies')}>Movies</button>
                    <button className= {`w-[80px] rounded-full`} onClick={() => scrollToSection('tvshows')}>Tv Shows</button>
                </ul>
            </nav>
            <div className="flex w-[100px] h-[34px] justify-between items-center">
                <button onClick={themeHandler} className={dark? "w-[34px] h-[20px] rounded-[10px] bg-text_main flex items-center justify-start p-[2px]" : "w-[34px] h-[20px] rounded-[10px] bg-bg flex items-center justify-end p-[2px]"}>
                    <span className={dark? "w-[16px] h-[16px] rounded-full bg-bg" : "w-[16px] h-[16px] rounded-full bg-text_main"}></span>
                </button>
                <img className="w-[34px] h-[34px]" src={dark? "/icons/profile.png" : "/icons/profile-black.png"} alt="" />
            </div>
        </div>
     );
}
 
export default Header ;