import React, { useState } from "react";
import "./Cards.css";
import Container from "../Container/Container";
import Card from "../Card/Card";
import Image from "../Image/Image";
import Title from "../Title/Title";
import Text from "../Text/Text";

const Cards = (props) => {
	const [showAbilities, setShowAbilities] = useState(false);

	const onMouseEnter = () => {
		setShowAbilities(true);
	};

	const onMouseLeave = () => {
		setShowAbilities(false);
	};

	const cardState = showAbilities ? "hovered" : "";

	return (
		<Container flex>
            <Card className={cardState} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
					<Image
						src={props.srcImageCard}
						alt={props.altImageCard}
						width={props.widthImageCard}
						height={props.heightImageCard}
					/>

					<Title as="h2">{props.children}</Title>
					<Text className="abilities">text</Text>
			</Card>
		</Container>
	);
};

export default Cards;
