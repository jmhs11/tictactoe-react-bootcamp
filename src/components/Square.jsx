import style from "./Square.module.css";

const Square = ({ value, onClick }) => {
	return (
		<button className={style.square} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
