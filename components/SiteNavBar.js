import { Button, Container, Nav, Navbar } from "react-bootstrap";
import colors from "../data/colors";

const SiteNavBar = ({isDarkMode, setIsDarkMode}) => {
    return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="site-navbar">
                <Container>
                    <Navbar.Brand href="#">Karan A.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav justify>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="/resume.pdf" target="_blank">Resume</Nav.Link>
                            <Nav.Link href="https://blog.karanel.tech" target="_blank">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button style={{backgroundColor: isDarkMode ? colors.darkTextSecondary : colors.lightTextSecondary }} onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ?
                            <>☀&nbsp;Light&nbsp;Mode</> : 
                            <>🌒︎&nbsp;Dark&nbsp;Mode</>
                        }
                    </Button>
                </Container>
            </Navbar>
		</>
	)
}

export default SiteNavBar