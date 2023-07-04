import SiteNavBar from '../components/SiteNavBar.js'
import HeroSection from '../components/HeroSection.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Work from '../components/Work.js';
import Projects from '../components/Projects.js';
import { useEffect, useState } from 'react';

const colors = {
    lightTextPrimary: "#604f71",
    lightTextSecondary: "#807094",
    lightBg: "#ef98a7",
    darkTextPrimary: "aliceblue",
    darkTextSecondary: "grey",
    darkBg: "#0f172a"
}

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        var r = document.querySelector(':root');
        if(isDarkMode){
            r.style.setProperty('--bg-color', colors.darkBg)
            r.style.setProperty('--text-primary', colors.darkTextPrimary)
            r.style.setProperty('--text-secondary', colors.darkTextSecondary)
            r.style.setProperty('--text-inactive', 'grey')
        }else{
            r.style.setProperty('--bg-color', colors.lightBg)
            r.style.setProperty('--text-primary', colors.lightTextPrimary)
            r.style.setProperty('--text-secondary', colors.lightTextSecondary)
            r.style.setProperty('--text-inactive', colors.lightTextPrimary)
        }
    }, [isDarkMode])
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