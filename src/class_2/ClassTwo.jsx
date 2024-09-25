import { useState } from "react";
import { Board } from "./components/Board";
import { Player } from "./components/Player";
import cloneDeep from "lodash/cloneDeep";

const initMatrix = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const checkRow = (matrix, row) => {
	let result = false;

	if (matrix[row][0] !== null) {
		if (matrix[row][0] === matrix[row][1]) {
			result = matrix[row][1] === matrix[row][2];
		}
	}

	return result;
};

const checkCol = (matrix, col) => {
	let result = false;

	if (matrix[0][col] !== null) {
		if (matrix[0][col] === matrix[1][col]) {
			result = matrix[1][col] === matrix[2][col];
		}
	}

	return result;
};

const checkDiagonals = (matrix) => {
	let result = false;

	if (matrix[0][0] !== null) {
		if (matrix[0][0] === matrix[1][1]) {
			result = matrix[1][1] === matrix[2][2];
		}
	}

	if (matrix[0][2] !== null) {
		if (matrix[0][2] === matrix[1][1]) {
			result = matrix[1][1] === matrix[2][0];
		}
	}

	return result;
};

const checkNewBoard = (matrix, row, col) => {
	let result = false;

	if (row !== 1 || col !== 1) {
		if (checkDiagonals(matrix)) result = true;
	}
	if (checkRow(matrix, row, col)) result = true;
	if (checkCol(matrix, row, col)) result = true;

	return result;
};

const ClassTwo = ({ showClass }) => {
	const [player, setPlayer] = useState(true);
	const [board, setBoard] = useState(initMatrix);
	const [winner, setWinner] = useState("");

	const handleNextTurn = () => {
		const nextPlayer = !player;
		setPlayer(nextPlayer);
	};

	const handleSquareClick = (e) => {
		const row = Number(e.target.dataset.coordinates[0]);
		const col = Number(e.target.dataset.coordinates[1]);
		if (board[row][col] === null) {
			const newBoard = cloneDeep(board);
			const symbol = player ? "x" : "o";
			newBoard[row][col] = symbol;
			setBoard(newBoard);
			if (!checkNewBoard(newBoard, row, col)) {
				handleNextTurn();
			} else {
				console.log(`player ${symbol} won`);
				setWinner(symbol);
			}
		}
	};

	return (
		<div
			style={{
				display: showClass === "class-two" ? "grid" : "none",
				height: "50vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>Tic Tac Toe</h1>
			<div>
				<Player player={player} />
				<Board board={board} handleClick={handleSquareClick} />
			</div>
			{winner && <div>winner is {winner}</div>}
		</div>
	);
};

export { ClassTwo };
