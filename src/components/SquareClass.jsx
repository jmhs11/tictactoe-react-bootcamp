import style from "./Square.module.css";

function SquareClass(props) {
	return (
		<button className={style.square} onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default SquareClass;
