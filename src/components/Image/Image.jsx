import React from "react";
import "./Image.css";

const Image = (props) => {

    const classnames = ["image"];
    if (props.className) classnames.push(props.className);

	return (
		<img
			className={classnames.join(" ")}
			src={props.src}
			alt={props.alt}
			loading={props.loading}
			width={props.width}
			height={props.height}
		/>
	);
};

export default Image;
