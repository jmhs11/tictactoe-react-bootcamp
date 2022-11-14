import React, { useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import Board from "./Board";
const style = require("./Game.module.css");

interface GameType {
	history: Array<History>;
	stepNumber: number;
	xIsNext: boolean;
}

interface History {
	squares: Array<string>;
}

const Game = () => {
	const [state, setState] = useState<GameType>({
		history: [
			{
				squares: Array(9).fill(null),
			},
		],
		stepNumber: 0,
		xIsNext: true,
	});

	const handleClick = (i: number) => {
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

	const jumpTo = (step: number) => {
		setState((prevState) => ({
			...prevState,
			stepNumber: step,
			xIsNext: step % 2 === 0,
		}));
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

	let status: string;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (state.xIsNext ? "X" : "O");
	}

	return (
		<div className={style.game}>
			<div className={style.game_board}>
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<div className={style.game_info}>
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
};

export default Game;
