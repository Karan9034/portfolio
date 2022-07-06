import { Image, Container } from "react-bootstrap";

function HeroSection() {
    return (
        <Container className='hero'>
                <Image src="/profile.jpg" roundedCircle thumbnail></Image>
                <div>
                    <h2>Kon&rsquo;nichiwa, this is <span>Karan Agrawal</span> from India.</h2>
                    <h3>Full Stack Developer and DevOps Enthusiast</h3>
                </div>
        </Container>
    );
}

export default HeroSection;