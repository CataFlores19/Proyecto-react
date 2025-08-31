import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//bootstarp
import "bootstrap/dist/css/bootstrap.min.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer.jsx";

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

			<div className="mx-1 m-2 px-1 pt-1">

				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst. Ut ex magna, maximus a placerat vel, imperdiet eu neque. Aliquam posuere vehicula ante, at volutpat nibh viverra vitae."
				/>

				{/* Contenedor de las tarjetas */}
				<div className="row text-center">
					<div className="col-sm-3">
						<Card
							imgUrl="https://placehold.co/500x325"
							imgAlt="img"
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst."
							linkUrl="#"
							linkText="Find Out More!"
						/>
					</div>

					<div className="col-sm-3">
						<Card
							imgUrl="https://placehold.co/500x325"
							imgAlt="img"
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst."
							linkUrl="#"
							linkText="Find Out More!"
						/>
					</div>

					<div className="col-sm-3">
						<Card
							imgUrl="https://placehold.co/500x325"
							imgAlt="img"
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst."
							linkUrl="#"
							linkText="Find Out More!"
						/>
					</div>

					<div className="col-sm-3">
						<Card
							imgUrl="https://placehold.co/500x325"
							imgAlt="img"
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst."
							linkUrl="#"
							linkText="Find Out More!"
						/>
					</div>
				</div>
			</div>

			<Footer />

		</div>
	);
};

export default Home;