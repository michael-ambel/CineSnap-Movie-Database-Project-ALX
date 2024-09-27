import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { SectionProvider } from "../contexts/SectionContext";

const Home = () => {
    return ( 
        <SectionProvider>
            <div className="flex flex-col items-center w-full min-w-[1024px] font-normal text-text_main">
                <Header />
                <Hero />
                <Footer />
            </div>
        </SectionProvider>
     );
}
 
export default Home;