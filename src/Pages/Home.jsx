import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import CompetitiveProgramming from "../Components/CompetitiveProgramming";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
    return (
        <div className="bg-gray-800">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <CompetitiveProgramming></CompetitiveProgramming>
            <Education></Education>
            <Contact></Contact>
            <hr className="border-t-2 my-8 mx-8" />
            <Footer></Footer>
        </div>
    );
};

export default Home;