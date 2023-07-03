import { Image } from 'react-bootstrap'

const Skill = ({name, src}) => {
    return (
        <div className="skill">
            <Image src={src} width={'35px'} height={'35px'}/>&nbsp;
            <span>{name}</span>
        </div>
    )
}

export default Skill