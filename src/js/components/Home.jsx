import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// Configuración personalizada para el NavBar
	const customMenuItems = [
		{ text: "Home", href: "#", active: true },
		{ text: "About", href: "#about", active: false },
		{ text: "Services", href: "#services", active: false },
		{ text: "Contact", href: "#contact", active: false }
	];

	return (
		<div>
			
			<NavBar 
				brandText="Start Bootstrap"
				brandHref="/"
				menuItems={customMenuItems}
			/>

			<Jumbotron 
				title = "A Warm Welcome!"
				description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst. Ut ex magna, maximus a placerat vel, imperdiet eu neque. Aliquam posuere vehicula ante, at volutpat nibh viverra vitae."
			/>

			{/* Contenedor de las tarjetas */}
			<div className="row text-center">
				<div className="col-sm-3">
					<Card />
				</div>

				<div className="col-sm-3">
					<Card />
				</div>

				<div className="col-sm-3">
					<Card />
				</div>

				<div className="col-sm-3">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Home;