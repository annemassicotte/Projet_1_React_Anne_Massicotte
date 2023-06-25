import React from "react";
import "./Title.css";

const Title = (props) => {
	const classnames = ["title"];

	if (props.className) classnames.push(props.className);

	switch (props.as) {
		case "h2":
			return (
				<h2 className={classnames.join(" ")}>{props.children}</h2>
			);
		case "h3":
			return (
				<h3 className={classnames.join(" ")}>{props.children}</h3>
			);
		default:
			return <h1 className={classnames.join(" ")}>{props.children}</h1>;
	}
};

export default Title;
