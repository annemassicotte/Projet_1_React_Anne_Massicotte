import React, { useState } from "react";
import "./Cards.css";
import Container from "../Container/Container";
import Card from "../Card/Card";
import Image from "../Image/Image";
import Title from "../Title/Title";
import Abilities from "../Abilities/Abilities";

import Arcanine from "../../images/Arcanine.png";
import Chansey from "../../images/Chansey.png";
import Clefairy from "../../images/Clefairy.png";
import Dewgong from "../../images/Dewgong.png";
import Eevee from "../../images/Eevee.png";
import Jigglypuff from "../../images/Jigglypuff.png";
import Pikachu from "../../images/Pikachu.png";
import Ponyta from "../../images/Ponyta.png";
import Vaporeon from "../../images/Vaporeon.png";
import Weedle from "../../images/Weedle.png";

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
			<Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Arcanine} alt="Arcanine" />
				<Title as="h2">Arcanine</Title>
				<Abilities>Intimidate, Flashfire</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Chansey} alt="Chansey" />
				<Title as="h2">Chansey</Title>
				<Abilities>Natural Cure, Serene Grace, Healer</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Clefairy} alt="Clefairy" />
				<Title as="h2">Clefairy</Title>
				<Abilities>Cute Charm, Magic Guard, Friend Guard</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Dewgong} alt="Dewgong" />
				<Title as="h2">Dewgong</Title>
				<Abilities>Thick Fat, Hydration, Ice Body</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Eevee} alt="Eevee" />
				<Title as="h2">Eevee</Title>
				<Abilities>Run Away, Adaptability, Anticipation</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Jigglypuff} alt="Jigglypuff" />
				<Title as="h2">Jigglypuff</Title>
				<Abilities>Cute Charm, Competitive, Friend Guard</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Pikachu} alt="Pikachu" />
				<Title as="h2">Pikachu</Title>
				<Abilities>Static, Lightning Rod</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Ponyta} alt="Ponyta" />
				<Title as="h2">Ponyta</Title>
				<Abilities>Run Away, Flash Fire, Flame Body</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Vaporeon} alt="Vaporeon" />
				<Title as="h2">Vaporeon</Title>
				<Abilities>Water Absorb, Hydration</Abilities>
            </Card>
            
            <Card
				className={cardState}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<Image src={Weedle} alt="Weedle" />
				<Title as="h2">Weedle</Title>
				<Abilities>Shield Dust, Run Away</Abilities>
            </Card>
        
		</Container>
	);
};

export default Cards;
