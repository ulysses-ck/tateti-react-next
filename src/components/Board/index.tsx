"use client";
import { useState } from "react";
import Cell from "../Cell";

export default function Board() {
	// board is a 3x3 grid of cells
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	// player is either "X" or "O"
	const [player, setPlayer] = useState("X");

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
