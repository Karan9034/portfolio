import { useState } from "react";
import { Container } from "react-bootstrap"
import experiences from "../data/experiences"

const Work = () => {
    const [id, setId] = useState(1)
    const [data, setData] = useState(experiences[0])
    
    const handleClick = (experience) => {
        setId(experience.id)
        setData(experience)
    }

    return (
        <Container id="work">
            <h2>Work Experience&nbsp;<hr style={{borderWidth: "2px"}}/></h2>
            <div id="work-content">
                <div id="work-toggle">
                    <ul>
                        {
                            experiences.map((experience) =>
                                <li key={experience.id} className={id===experience.id ? "active" : undefined} onClick={() => handleClick(experience)}>{experience.company}</li>
                            )
                        }
                    </ul>
                </div>
                <div id="work-details">
                    <h4>{data.role}&nbsp;<a href={data.url}>@{data.company}</a></h4>
                    <p className="duration">{data.start} — {data.end}</p>
                    <ul>
                        {data.description.map((item) => 
                            <li key={item}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Work;