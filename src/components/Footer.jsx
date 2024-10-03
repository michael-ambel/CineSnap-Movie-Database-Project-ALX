import { useSection } from "../contexts/SectionContext";
const Footer = () => {

    const {dark} = useSection()

    return ( 
        <div className={`flex flex-col items-center h-[600px] pt-[140px] pb-[100px] px-[14px] md:px-[36px] lg:px-[62px] w-full ${dark? 'bg-bg' : 'bg-text_main'}`}>
            <div className="w-full">
                <h1 className={`text-[32px] font-light ${dark? 'text-text_main' : 'text-card_black'}`}>Let’s connect!</h1>
                <p className="text-[14px] font-light text-inactive">Best recommendations every day. We provide you the best!</p>
            </div>
            <div className={`flex justify-center w-auto md:w-[386px] h-[60px] p-[3px] mt-[32px] mb-[42px] rounded-full ${dark? 'bg-text_main' : 'bg-card'}`}>
                <form className="flex justify-between h-[36px] rounded-full bg-transparent" action="">
                    <input 
                    className={`text-center w-[280px] md:w-[308px] h-full rounded-full focus:outline-none border-none  bg-transparent placeholder:text-inactive ${dark? 'text-card' : 'text-text_main'}`}
                    type="text" 
                    placeholder="enter your e-mail here"
                    />
                    <button className="w-[72px] h-full bg-text_red rounded-full">Join</button>
                </form>
            </div>
            <div className="w-[340px] md:w-[368px] h-[28px]">
                <ul className="flex justify-between items-center h-full w-full">
                    <li><a href=""><img className="h-[28px]" src="\icons\linkdin.png" alt="" /></a></li>
                    <li><a href=""><img className="h-[28px]" src="\icons\google.png" alt="" /></a></li>
                    <li><a href=""><img className="h-[28px]" src="\icons\youtube.png" alt="" /></a></li>
                    <li><a href=""><img className="h-[28px]" src="\icons\x.png" alt="" /></a></li>
                    <li><a href=""><img className="h-[28px]" src="\icons\instagram.png" alt="" /></a></li>
                    <li><a href=""><img className="h-[28px]" src="\icons\thread.png" alt="" /></a></li>
                    <li><a href=""><img className="h-[28px]" src="\icons\discord.png" alt="" /></a></li>
                </ul>
            </div>
            <div className="flex justify-between w-full text-[14px] font-light text-inactive mt-[80px] mb-[140px] px-[10px] md:px-[80px]">
                <p>CineSnap 2024 © All rights reserved</p>
                <p>Designed & developd by Michael A.</p>
            </div>
        </div>
     );
}
 
export default Footer;