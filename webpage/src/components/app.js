import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Blog from "./blog";
import Work from "./work";
import Contact from "./contact";
import Footer from "./footer";
//import { header } from "express/lib/response";

function App() {
    return(
        <>
            <header className="navbar">
                <Header/>
            </header>
            <main>
                <Hero/>
                <About/>
                <Blog/>
                <Work/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
};

export default App;