import { Component } from "react";
import style from "./Board.module.css";
import SquareClass from "./SquareClass";

class BoardClass extends Component {
	renderSquare(i) {
		return <SquareClass value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	render() {
		return (
			<div>
				<div className={style.board_row}>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className={style.board_row}>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className={style.board_row}>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default BoardClass;
