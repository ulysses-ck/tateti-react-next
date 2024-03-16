"use client";
export default function Cell({
	board,
	rowIndex,
	cellIndex,
	cell,
	player,
	setPlayer,
	setBoard,
	isPlaying,
}: {
	board: string[][];
	rowIndex: number;
	cellIndex: number;
	cell: string;
	player: string;
	setPlayer: (player: string) => void;
	setBoard: (board: string[][]) => void;
	isPlaying: boolean;
}) {
	const handleClickCell = (rowIndex: number, cellIndex: number) => {
		const newBoard = board.map((row, r) => {
			if (rowIndex === r) {
				return row.map((cell, c) => {
					if (cellIndex === c) {
						if (cell === "") {
							return player;
						}
					}
					return cell;
				});
			}
			return row;
		});
		setBoard(newBoard);
		// after a cell is clicked, and board repainted, the player is switched
		const newPlayer = player === "X" ? "O" : "X";
		setPlayer(newPlayer);
	};

	return (
		<button
			className="w-[80px] h-[80px] bg-black text-4xl flex justify-center items-center cursor-pointer focus:outline-none focus:border-none border-none opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
			key={`${rowIndex}${cellIndex}`}
			onClick={() => handleClickCell(rowIndex, cellIndex)}
			disabled={!isPlaying}
		>
			<span className={cell === "X" ? "text-blue-700" : "text-red-600"}>
				{cell}
			</span>
		</button>
	);
}
