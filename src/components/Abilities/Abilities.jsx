import React from "react";
import "./Abilities.css";
import Title from "../Title/Title";
import Text from "../Text/Text";

const Abilities = (props) => {
	return (
		<div>
            <Title as="h3" className="abilities">Abilities</Title>
            <Text className="abilities">{props.children}</Text>
		</div>
	);
};

export default Abilities;
