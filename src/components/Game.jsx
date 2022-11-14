import React, { useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import BoardClass from "./BoardClass";
import style from "./Game.module.css";

const Game = () => {
	const [state, setState] = useState({
		history: [
			{
				squares: Array(9).fill(null),
			},
		],
		stepNumber: 0,
		xIsNext: true,
	});

	const handleClick = (i) => {
		const history = state.history.slice(0, state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = state.xIsNext ? "X" : "O";
		setState({
			history: history.concat([
				{
					squares: squares,
				},
			]),
			stepNumber: history.length,
			xIsNext: !state.xIsNext,
		});
	};

	const jumpTo = (step) => {
		setState({
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	};

	const history = state.history;
	const current = history[state.stepNumber];
	const winner = calculateWinner(current.squares);

	const moves = history.map((step, move) => {
		const desc = move ? "Go to move #" + move : "Go to game start";
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (state.xIsNext ? "X" : "O");
	}

	return (
		<div className={style.game}>
			<div className={style.game_board}>
				<BoardClass squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<div className={style.game_info}>
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
};

export default Game;
