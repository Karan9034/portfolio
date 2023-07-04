import { Container } from "react-bootstrap"
import Skill from "./Skill"
import skillsData from "../data/skills"

const Skills = () => {
    return (
        <Container id="skills">
            <h2>Skills&nbsp;<hr style={{borderWidth: "2px"}}/></h2>
            <Container style={{width: '90%', marginLeft: "5%", marginRight: "5%"}}>
                <h5>Languages&nbsp;<hr style={{borderWidth: "1px"}}/></h5>
                <div className="languages">
                    {skillsData.languages.map((skill, index) => (
                        <Skill key={index} name={skill.name} src={skill.src} />
                    ))}
                </div>
                <h5>Tools & Frameworks&nbsp;<hr style={{borderWidth: "1px"}}/></h5>
                <div className="frameworks">
                    {skillsData.frameworks.map((skill, index) => (
                        <Skill key={index} name={skill.name} src={skill.src} />
                    ))}
                </div>
                <h5>Platforms&nbsp;<hr style={{borderWidth: "1px"}}/></h5>
                <div className="platforms">
                    {skillsData.platforms.map((skill, index) => (
                        <Skill key={index} name={skill.name} src={skill.src} />
                    ))}
                </div>
            </Container>
        </Container>
    )
}

export default Skills