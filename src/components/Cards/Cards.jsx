import React from "react";
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

const Cards = () => {
	return (
		<Container flex noGutters>
			<Card>
				<Image src={Arcanine} alt="Arcanine" />
				<Title as="h2" className="centered">Arcanine</Title>
				<Abilities>Intimidate, Flashfire</Abilities>
			</Card>

			<Card>
				<Image src={Chansey} alt="Chansey" />
				<Title as="h2" className="centered">Chansey</Title>
				<Abilities>Natural Cure, Serene Grace, Healer</Abilities>
			</Card>

			<Card>
				<Image src={Clefairy} alt="Clefairy" />
				<Title as="h2" className="centered">Clefairy</Title>
				<Abilities>Cute Charm, Magic Guard, Friend Guard</Abilities>
			</Card>

			<Card>
				<Image src={Dewgong} alt="Dewgong" />
				<Title as="h2" className="centered">Dewgong</Title>
				<Abilities>Thick Fat, Hydration, Ice Body</Abilities>
			</Card>

			<Card>
				<Image src={Eevee} alt="Eevee" />
				<Title as="h2" className="centered">Eevee</Title>
				<Abilities>Run Away, Adaptability, Anticipation</Abilities>
			</Card>

			<Card>
				<Image src={Jigglypuff} alt="Jigglypuff" />
				<Title as="h2" className="centered">Jigglypuff</Title>
				<Abilities>Cute Charm, Competitive, Friend Guard</Abilities>
			</Card>

			<Card>
				<Image src={Pikachu} alt="Pikachu" />
				<Title as="h2" className="centered">Pikachu</Title>
				<Abilities>Static, Lightning Rod</Abilities>
			</Card>

			<Card>
				<Image src={Ponyta} alt="Ponyta" />
				<Title as="h2" className="centered">Ponyta</Title>
				<Abilities>Run Away, Flash Fire, Flame Body</Abilities>
			</Card>

			<Card>
				<Image src={Vaporeon} alt="Vaporeon" />
				<Title as="h2" className="centered">Vaporeon</Title>
				<Abilities>Water Absorb, Hydration</Abilities>
			</Card>

			<Card>
				<Image src={Weedle} alt="Weedle" />
				<Title as="h2" className="centered">Weedle</Title>
				<Abilities>Shield Dust, Run Away</Abilities>
			</Card>
		</Container>
	);
};

export default Cards;
