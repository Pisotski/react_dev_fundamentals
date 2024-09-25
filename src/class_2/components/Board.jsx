import { Row } from "./Row";
const Board = ({ board, handleClick }) => {
	return (
		<>
			{board.map((row, rowIndex) => {
				return (
					<Row
						key={`row-${rowIndex}`}
						column={row}
						rowIndex={rowIndex}
						handleClick={handleClick}
					/>
				);
			})}
		</>
	);
};

export { Board };
