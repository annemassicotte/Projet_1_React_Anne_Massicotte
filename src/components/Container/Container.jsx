import React from "react";
import "./Container.css";

const Container = (props) => {
	const classnames = ["container"];

	if (props.fluid) classnames.push("fluid");
	if (props.noGutters) classnames.push("no-gutters");
	if (props.flex) classnames.push("flex");
	if (props.className) classnames.push(props.className);

	return (
		<div
			className={classnames.join(" ")}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{props.children}
		</div>
	);
};

export default Container;
