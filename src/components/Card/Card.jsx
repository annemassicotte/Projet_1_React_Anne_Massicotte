import React from "react";
import "./Card.css";
import Container from "../Container/Container";
import { useState } from "react";

const Card = (props) => {
	
	const [showAbilities, setShowAbilities] = useState(false);

	const onMouseEnter = () => {
		setShowAbilities(true);
	};

	const onMouseLeave = () => {
		setShowAbilities(false);
	};

	const cardState = showAbilities ? "hovered" : "";

	return (
		<Container
			className={`card ${cardState}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{props.children}
		</Container>
	);
};

export default Card;
