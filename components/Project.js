import Skill from "./Skill";
import colors from "../data/colors";

const Project = ({project}) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={project.image} alt={project.title}/>
                <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    View On GitHub
                    <img width="14px" style={{marginLeft: '10px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg=="></img>
                </a>
            </div>
            <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span className="tag" key={index}>{`#${tag}`}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;