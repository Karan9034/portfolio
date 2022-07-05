import { Image, Container } from "react-bootstrap";

function HeroSection() {
    return (
        <Container className='hero-img'>
                <Image src="/profile.jpg" roundedCircle thumbnail></Image>
                <div>
                    <h2>Kon&rsquo;nichiwa! This is Karan.</h2>
                </div>
        </Container>
    );
}

export default HeroSection;