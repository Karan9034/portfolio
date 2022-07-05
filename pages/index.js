import Script from 'next/script'
import SiteNavBar from '../components/SiteNavBar.js'
import HeroSection from '../components/HeroSection.js';

const Home = () => {
    return (
        <div>
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'></Script>
            <Script src='https://code.jquery.com/jquery-3.6.0.min.js'></Script>
            <SiteNavBar />
            <HeroSection />
        </div>
    )
}

export default Home;