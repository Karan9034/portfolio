import { Container } from "react-bootstrap"
import Skill from "./Skill"

const Skills = () => {
    return (
        <Container id="skills">
            <h2>Skills&nbsp;<hr style={{borderWidth: "2px"}}/></h2>
            <div>
                <h5>Languages</h5>
                <h5>Libraries & Frameworks</h5>
                <h5>Tools & Cloud</h5>
            </div>
        </Container>
    )
}

export default Skills