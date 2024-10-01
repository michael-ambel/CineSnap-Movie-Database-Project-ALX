import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import SearchedMovies from "./SearchedMovies";

const Home = () => {
    return ( 
        
            <div className="flex flex-col items-center w-full min-w-[1024px] font-normal text-text_main">
                <Header />
                <Hero />
                <Footer />
            </div>
        
     );
}
 
export default Home;