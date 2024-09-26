const Hero  = () => {
    return ( 
        <div className="h-[1870px] min-w-[1024px] bg-bg flex items-center justify-between px-[62px] py-[52px] border-inactive border-2">
            <div className="fixed justify-start top-[130px] left-0 px-[62px] h-[330px] w-[90px]">
                <p className="w-[80px] h-[25px] text-start font-bold mb-[15px]">Gener</p>
                <ul className="flex flex-col justify-between w-[90px] h-[255px] mb-[17px] text-start text-[13px] text-inactive font-light">
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
        </div>
     );
}
 
export default Hero ;