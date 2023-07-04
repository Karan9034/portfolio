import SiteNavBar from '../components/SiteNavBar.js'
import HeroSection from '../components/HeroSection.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Work from '../components/Work.js';
import Projects from '../components/Projects.js';

const Home = () => {
    return (
        <div>
            <SiteNavBar />
            <HeroSection />
            <About />
            <Work />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home;