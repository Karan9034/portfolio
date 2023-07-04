import { Container, Image } from "react-bootstrap"

const About = () => {
    return (
        <Container id="about">
            <h2>About&nbsp;<hr style={{borderWidth: "2px"}}/></h2>
            <div id="about-content">
                <Image src="/images/about.png" />
                <div id="about-text">
                    I am a self-taught and passionate software developer who likes to play with code and build things.
                    I have experience building on various platforms including web, mobile and desktop.
                    I am also familiar with the DevOps culture and have experience in deploying applications on the cloud.
                    I am currently exploring the world of Web3 and Blockchain.
                    I am always looking for new opportunities to learn and grow.
                </div>
            </div>
        </Container>
    )
}

export default About