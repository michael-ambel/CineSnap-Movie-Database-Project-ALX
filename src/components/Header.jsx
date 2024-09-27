import { useState } from "react";

const Header  = () => {
    const [dark, setDark] = useState(true)
    const themeHandler = (e) => {
        e.preventDefault()
        setDark(!dark)
    }

    function scrollToSection(id) {
        const element = document.getElementById(id);
        const yOffset = -130; // Adjust this based on your navbar height (e.g., -64px for a 64px height navbar)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
        window.scrollTo({ top: y, behavior: 'smooth' });
      }

    return ( 
        <div className={dark? "sticky top-0 h-[130px] w-full max-w-[1440px] mx-auto min-w-[1024px] bg-bg flex items-start justify-between px-[62px] py-[52px]" : "sticky top-0 h-[130px] w-[100%] max-w-[1440px] mx-auto min-w-[1024px] bg-text_main flex items-center justify-between px-[62px] py-[52px]"}>
            <span className={dark? "text-[26px] font-light" : "text-[26px] font-light text-card"}>Cine<span className="font-bold text-text_red">Snap</span></span>
            <form className="flex items-center justify-between w-[299px] h-[28px] bg-transparent">
               
                <input type="text" placeholder="Search Movie/Tv Show Here" className={dark? "text-center px-3 w-[245px] h-[30px] rounded-[39px] font-light bg-transparent border-[2px] border-inactive placeholder:text-[14px] placeholder:text-inactive" : "text-center px-3 w-[245px] h-[30px] rounded-[39px] font-light bg-transparent border-[2px] text-card border-inactive placeholder:text-[14px] placeholder:text-inactive"}  />
                <button><img className="w-[28px] h-[28px] bg-transparent" src="/icons/search.png" alt="" /></button>
            </form>
            <nav>
                <ul className={dark? "flex items-center justify-between w-[227px] h-[28px] text-[16px] font-normal" : "flex items-center justify-between text-card w-[227px] h-[28px] text-[16px] font-normal"}>
                    <button onClick={() => scrollToSection('movies')}>Home</button>
                    <button onClick={() => scrollToSection('movies')}>Movies</button>
                    <button onClick={() => scrollToSection('tvshows')}>Tv Shows</button>
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