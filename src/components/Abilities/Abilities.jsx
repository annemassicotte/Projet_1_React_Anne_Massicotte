import React from "react";
import "./Abilities.css";
import Title from "../Title/Title";
import Text from "../Text/Text";

const Abilities = (props) => {
	return (
		<div>
            <Title as="h3" className="abilities centered">Abilities</Title>
            <Text className="abilities centered">{props.children}</Text>
		</div>
	);
};

export default Abilities;
