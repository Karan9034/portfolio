import Header from './Header.js'
import Footer from './Footer.js'

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