import Header from './Header.js'
import Footer from './Footer.js'
import SiteNavBar from './SiteNavBar.js'

const Layout = ({ children }) => {
	return (
        <>
            <Header />
            <SiteNavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout