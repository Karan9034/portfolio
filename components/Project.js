const Project = ({project}) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={project.image} alt={project.title}/>
            </div>
            <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
                <div className="project-skills">
                    {project.skills.map((skill) => {
                        return (
                            <span key={skill}>{skill}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;