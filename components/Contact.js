import { Container } from "react-bootstrap"

const Contact = () => {
	return (
		<div id="contact">
			<div className="icons">
				<a href="https://github.com/Karan9034"><i className="bi bi-github"></i></a>
				<a href="https://linkedin.com/in/karanel"><i className="bi bi-linkedin"></i></a>
				<a href="https://instagram.com/_karan.garg"><i className="bi bi-instagram"></i></a>
				<a href="https://twitter.com/_karanel"><i className="bi bi-twitter"></i></a>
				<a href="https://discordapp.com/users/716322492586655795"><i className="bi bi-discord"></i></a>
				<a href="mailto:karan.agr9034@gmail.com"><i className="bi bi-envelope"></i></a>
			</div>
			<hr style={{width: "50%"}}/>
			<div>
				<p>Made with 💕 by <span>Karan Agrawal</span></p>
			</div>
		</div>
	)
}

export default Contact