import { Container, Nav, Navbar } from "react-bootstrap";

const SiteNavBar = () => {
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
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="https://blog.karanel.tech">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
		</>
	)
}

export default SiteNavBar