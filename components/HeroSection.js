import { Image, Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
    return (
        <Container id='hero'>
                <Image src="/profile.jpg" roundedCircle thumbnail></Image>
                <div>
                    <h2>Kon&rsquo;nichiwa!👋 This is <span>Karan Agrawal</span> from India.</h2>
                    <h3>
                        I am a&nbsp;
                        <TypeAnimation 
                            cursor={true}
                            speed={20}
                            className='type-animation'
                            sequence={[
                                'MERN Stack Developer🚀',
                                1000,
                                'Flask Developer⚡',
                                1000,
                                'Web3 Ethusiast🌐',
                                1000,
                                'Blockchain Developer🔑',
                                1000,
                            ]}
                            deletionSpeed={60}
                            repeat={Infinity}
                        />
                    </h3>
                </div>
        </Container>
    );
}

export default HeroSection;