import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import {Skills} from "./Components/Skills"


function App() {
    return (
        <>
            <div className="bg-gray-900 ">
                <Navbar />
                <Header />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer/>
            </div>

        </>
    );
}

export default App;
