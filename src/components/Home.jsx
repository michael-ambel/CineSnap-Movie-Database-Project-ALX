import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
    return ( 
        <div className="min-w-lg font-normal text-text_main">
            <Header />
            <Hero />
            <Footer />
        </div>
     );
}
 
export default Home;