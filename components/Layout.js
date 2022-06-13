// import Navbar from './Navbar'
import Header from './Header'
// import Container from '@material-ui/core/Container'


const Layout = ({ children }) => {
	return (
        <>
            {/* <Container> */}
                <Header />
                {children}
            {/* </Container> */}
        </>
    )
}

export default Layout