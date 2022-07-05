import { Container, Nav, Navbar } from "react-bootstrap";

const SiteNavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="site-navbar">
                <Container fluid="lg">
                    <Navbar.Brand href="#home">Karan A.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav justify>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
		</>
	)
}

export default SiteNavBar