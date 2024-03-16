"use client";
import { useState } from "react";

export default function Board() {
	// board is a 3x3 grid of cells
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	// player is either "X" or "O"
	const [player, setPlayer] = useState("X");

	const handleClickCell = (rowIndex: number, cellIndex: number) => {
		const newBoard = board.map((row, r) => {
			if (rowIndex === r) {
				return row.map((cell, c) => {
					if (cellIndex === c) {
						if (cell === "") {
							setPlayer((prevPlayer) =>
								prevPlayer === "X" ? "O" : "X",
							);
							return player;
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
		<div className="grid grid-cols-3 grid-row-3 gap-2 bg-black w-fit h-fit">
			{board.map((row, rowIndex) => {
				return row.map((cell, cellIndex) => {
					return (
						<div
							className="w-[80px] h-[80px] bg-red-300 text-black text-4xl flex justify-center items-center cursor-pointer"
							key={`${rowIndex}${cellIndex}`}
							onClick={() => handleClickCell(rowIndex, cellIndex)}
						>
							{cell}
						</div>
					);
				});
			})}
		</div>
	);
}
