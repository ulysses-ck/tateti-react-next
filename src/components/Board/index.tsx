"use client";
import Cell from "../Cell";

export default function Board({
	board,
	player,
	setBoard,
	setPlayer,
}: {
	board: string[][];
	player: string;
	setBoard: (board: string[][]) => void;
	setPlayer: (player: string) => void;
}) {
	return (
		<div className="grid grid-cols-3 grid-row-3 gap-2 bg-black w-fit h-fit">
			{board.map((row, rowIndex) => {
				return row.map((cell, cellIndex) => {
					return (
						<Cell
							key={`${rowIndex}${cellIndex}`}
							board={board}
							rowIndex={rowIndex}
							cellIndex={cellIndex}
							cell={cell}
							player={player}
							setPlayer={setPlayer}
							setBoard={setBoard}
						/>
					);
				});
			})}
		</div>
	);
}
