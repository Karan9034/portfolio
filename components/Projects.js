import { Container } from "react-bootstrap";
import projects from "../data/projects.js";
import Project from "./Project.js";

const Projects = () => {
    return (
        <Container id="projects">
            <h2>Projects&nbsp;<hr style={{borderWidth: "2px"}}/></h2>
            <div id="projects-content">
                {projects.map((project) => {
                    return (
                        <Project key={project.id} project={project}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default Projects;