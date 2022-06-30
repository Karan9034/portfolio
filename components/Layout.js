import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
        <>
            {/* <Container> */}
                <Header />
                {children}
                <Footer />
            {/* </Container> */}
        </>
    )
}

export default Layout