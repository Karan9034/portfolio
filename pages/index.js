import SiteNavBar from '../components/SiteNavBar.js'
import HeroSection from '../components/HeroSection.js';
import About from '../components/About.js';
import Work from '../components/Work.js';

const Home = () => {
    return (
        <div>
            <SiteNavBar />
            <HeroSection />
            <About />
            <Work />
        </div>
    )
}

export default Home;