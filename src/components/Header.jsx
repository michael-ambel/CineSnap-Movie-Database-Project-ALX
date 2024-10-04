import { useEffect, useState } from "react";
import { useSection } from "../contexts/SectionContext";
import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";

const Header  = () => {

    const [menu, setMenu] = useState(false)

    const navigate = useNavigate()
    
    const {searchIn, setSearchIn, newSearch, setNewSearch } = useSearchContext()
    const {setActiveSection, dark, setDark} = useSection();

    const menuHndler = () => {
        setMenu(!menu)
    }
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

        const y = element.getBoundingClientRect().top + window.scrollY -130;
      
        window.scrollTo({ top: y, behavior: 'smooth' });

        setActiveSection(section);
      }

      function scrollToSectionPhone(section) {
        menuHndler()
        navigate(`/#${section}`)
        setSearchIn('')

        const element = document.getElementById(section);

        const y = element.getBoundingClientRect().top + window.scrollY -130;
      
        window.scrollTo({ top: y, behavior: 'smooth' });

        setActiveSection(section);
      }

    return ( 
        <div className={`sticky top-0 z-10 flex flex-col md:flex-row items-center justify-between w-full h-[140px] md:h-[130px] max-w-[1440px] mx-auto px-[14px] md:px-[36px] lg:px-[62px] py-[20px] md:py-[52px] 
            ${dark? 'bg-bg':'bg-text_main'}`}>
            <button onClick={() => scrollToSection('movies')} className={`hidden md:flex text-[26px] w-[120px] font-light cursor-pointer ${dark? 'text-text_main':'text-card'}`}>Cine<span className="font-bold text-text_red">Snap</span></button>
            <div className="flex md:hidden items-end justify-between w-full">
                <span className={`md:hidden flex text-[26px] w-[120px] font-light ${dark? 'text-text_main':'text-card'}`}>Cine<span className="font-bold text-text_red">Snap</span></span>
                <button onClick={menuHndler} className="w-[34px] h-[30px]"><img src={`${dark? '/icons/menu.png':'/icons/menu-black.png'}`} alt="" /></button>
            </div>
            <div className="flex py-[10px] md:items-center w-full md:w-[480px] lg:w-[570px]  justify-between">
            <form className="flex items-center justify-between w-[280px] md:w-[300px] lg:w-[310px] h-[40px]">               
                <input 
                type="text" 
                placeholder="Search Movie/Tv Show Here" 
                onChange={(e) => {
                    setSearchIn(e.target.value)
                }}
                value = {searchIn}
                className={`text-center px-3 w-[230px] md:w-[250px] lg:w-[260px] h-[30px] rounded-[39px] placeholder:font-light font-normal border-[2px]  border-none outline-none placeholder:text-inactive ${dark? "bg-text_main text-card_black" : "bg-card_black text-text_main"}`}  />
                <Link to = '/search'><button onClick={newSearchHandler} ><img className="w-[28px] h-[28px] mt-[4px] bg-transparent" src="/icons/search.png" alt="" /></button></Link>
            </form>

            <nav className="hidden md:flex">
                <ul className={`flex items-center justify-between w-[240px] md:w-[160px] lg:w-[200px] h-[60px] text-[16px] font-normal ${dark? "text-text_main" : "text-card_black"}`}>
                    {/* <button className= {`w-[80px] rounded-full ${activeSection === 'home' ? "border-text_red border-[1px]" : "border-none"}`} onClick={() => scrollToSection('movies')}>Home</button> */}
                    <button className= {`w-[70px] rounded-full`}  onClick={() => scrollToSection('movies')}>Movies</button>
                    <button className= {`w-[70px] rounded-full`} onClick={() => scrollToSection('tvshows')}>Tv Shows</button>
                </ul>
            </nav>
            </div>

            <div className="flex w-auto h-[130px] pb-[30px] md:pb-0 justify-between items-center">
                
                <div className="hidden md:flex w-[100px] h-[34px] justify-between items-center">
                    <button onClick={themeHandler} className={`w-[34px] h-[20px] rounded-[10px] flex items-center justify-start p-[2px] ${dark? 'bg-text_main ':'bg-bg'}`}>
                        <span className={dark? "w-[16px] h-[16px] rounded-full bg-bg" : "w-[16px] h-[16px] rounded-full bg-text_main"}></span>
                    </button>
                    <img className="w-[34px] h-[34px]" src={dark? "/icons/profile.png" : "/icons/profile-black.png"} alt="" />
                </div>

                <div className={`fixed flex justify-between w-[300px] h-[540px] top-0 right-[-300px] py-[49px] px-[24px] transition-transform duration-500 ease-in-out ${dark? 'bg-bg':'bg-text_main'} ${menu? 'translate-x-[-300px]':'translate-x-0'}`}>
                    <button className="w-[28px] h-[28px]" onClick={menuHndler}> <img src={`${dark? '/icons/close.png':'/icons/close-black.png'}`} alt="" /></button>
                    <div className="flex flex-col items-start font-bold text-[18px]">
                    <div className={`flex flex-col items-start font-bold text-[18px] ${dark? 'text-text_main':'text-card_black'}`}>
                            <button className= {`w-[80px] rounded-full text-left mb-[40px]`} onClick={() => scrollToSectionPhone('movies')}>Movies</button>
                            <button className= {`w-[80px] rounded-full text-left mb-[40px]`} onClick={() => scrollToSectionPhone('tvshows')}>Tv Shows</button>
                            <button className= {`w-[80px] rounded-full flex items-center text-left gap-1 mb-[18px]` } onClick={menuHndler}><span>Gener</span><img className="w-[14px] h-[8px] mt-[4px]" src="/icons/down.png" alt="" /></button>
                        </div>
                        <div>
                            <ul className={`flex flex-col justify-between w-[90px] h-[243px] mb-[40px] text-start text-[13px] font-light ${dark? 'text-inactive' : 'text-card_black'}`}>
                                <li><Link to='/gener/Action' onClick={menuHndler}><button>Action</button></Link></li>
                                <li><Link to='/gener/Sci-Fi' onClick={menuHndler}><button>Sci-Fi</button></Link></li>
                                <li><Link to='/gener/Fantasy' onClick={menuHndler}><button>Fantasy</button></Link></li>
                                <li><Link to='/gener/Comedy' onClick={menuHndler}><button>Comedy</button></Link></li>
                                <li><Link to='/gener/Horror' onClick={menuHndler}><button>Horror</button></Link></li>
                                <li><Link to='/gener/Adventure' onClick={menuHndler}><button>Adventure</button></Link></li>
                                <li><Link to='/gener/Drama' onClick={menuHndler}><button>Drama</button></Link></li>                            
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start w-[50px] h-[100px]">
                        <img className="w-[44px] h-[44px] mb-[28px]" src={dark? "/icons/profile.png" : "/icons/profile-black.png"} alt="" />
                        <button onClick={themeHandler} className={`w-[50px] h-[30px] rounded-full flex items-center justify-start p-[2px] ${dark? 'bg-text_main ':'bg-bg'}`}>
                            <span className={dark? "w-[26px] h-[26px] rounded-full bg-bg" : "w-[26px] h-[26px] rounded-full bg-text_main"}></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header ;