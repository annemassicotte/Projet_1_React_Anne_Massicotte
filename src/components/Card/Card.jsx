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

	const cardHoverState = showAbilities ? "hovered" : "";

	return (
		<Container
			className={`card ${cardHoverState}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{props.children}
		</Container>
	);
};

export default Card;
