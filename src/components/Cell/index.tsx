"use client";
export default function Cell({
	board,
	rowIndex,
	cellIndex,
	cell,
	player,
	setPlayer,
	setBoard,
}: {
	board: string[][];
	rowIndex: number;
	cellIndex: number;
	cell: string;
	player: string;
	setPlayer: (player: string) => void;
	setBoard: (board: string[][]) => void;
}) {
	const handleClickCell = (rowIndex: number, cellIndex: number) => {
		const newBoard = board.map((row, r) => {
			if (rowIndex === r) {
				return row.map((cell, c) => {
					if (cellIndex === c) {
						if (cell === "") {
							const newPlayer = player === "X" ? "O" : "X";
							setPlayer(newPlayer);
							return newPlayer;
						}
					}
					return cell;
				});
			}
			return row;
		});
		setBoard(newBoard);
	};

	return (
		<div
			className="w-[80px] h-[80px] bg-red-300 text-black text-4xl flex justify-center items-center cursor-pointer"
			key={`${rowIndex}${cellIndex}`}
			onClick={() => handleClickCell(rowIndex, cellIndex)}
		>
			{cell}
		</div>
	);
}
