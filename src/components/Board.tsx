import React from "react";
import Square from "./Square";
const style = require("./Board.module.css");

interface BoardType {
	squares: Array<string>;
	onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: BoardType) => {
	const renderSquare = (i: number) => {
		return <Square value={squares[i]} onClick={() => onClick(i)} />;
	};

	return (
		<div>
			<div className={style.board_row}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className={style.board_row}>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className={style.board_row}>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

export default Board;
