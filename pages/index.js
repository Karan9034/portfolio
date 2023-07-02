import SiteNavBar from '../components/SiteNavBar.js'
import HeroSection from '../components/HeroSection.js';
import Skills from '../components/Skills.js';
import Work from '../components/Work.js';

const Home = () => {
    return (
        <div>
            <SiteNavBar />
            <HeroSection />
            <Skills />
            <Work />
        </div>
    )
}

export default Home;