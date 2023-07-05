import SiteNavBar from '../components/SiteNavBar.js'
import HeroSection from '../components/HeroSection.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Work from '../components/Work.js';
import Projects from '../components/Projects.js';
import { useEffect, useState } from 'react';
import colors from '../data/colors.js';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        var r = document.querySelector(':root');
        if(isDarkMode){
            r.style.setProperty('--bg-color', colors.darkBg)
            r.style.setProperty('--text-primary', colors.darkTextPrimary)
            r.style.setProperty('--text-secondary', colors.darkTextSecondary)
            r.style.setProperty('--text-inactive', colors.darkTextInactive)
        }else{
            r.style.setProperty('--bg-color', colors.lightBg)
            r.style.setProperty('--text-primary', colors.lightTextPrimary)
            r.style.setProperty('--text-secondary', colors.lightTextSecondary)
            r.style.setProperty('--text-inactive', colors.lightTextInactive)
        }
    }, [isDarkMode])
    return (
        <div>
            <SiteNavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <HeroSection />
            <About />
            <Work />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home;