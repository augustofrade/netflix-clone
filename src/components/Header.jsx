import React from "react";
import "./Header.css";

export default function Header({black}) {
	
	return (
		<header className={black ? "black" : ""}>
			<div className="header--logo">
				<a href="">
					<img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Logo" />
				</a>
			</div>
			<div className="header--user">
				<a>
					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="User profile" />
				</a>
			</div>
		</header>
	)
}