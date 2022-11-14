import React from "react";
const style = require("./Square.module.css");

interface SquareType {
	value: string;
	onClick: () => void;
}

const Square = ({ value, onClick }: SquareType) => {
	return (
		<button className={style.square} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
