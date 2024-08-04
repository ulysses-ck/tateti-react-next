"use client";
// react
import { useEffect, useState } from "react";

// components
import Board from "../Board";

export default function Game() {
	// board is a 3x3 grid of cells
	const [board, setBoard] = useState<string[][]>([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	// state to handle play of the game
	const [isPlaying, setIsPlaying] = useState(false);

	// player is either "X" or "O"
	const [player, setPlayer] = useState("X");

	// game's winner
	const [winner, setWinner] = useState("");

	const handleClickPlay = () => {
		setIsPlaying(true);
	};

	const handleClickReset = () => {
		setBoard([
			["", "", ""],
			["", "", ""],
			["", "", ""],
		]);
		setIsPlaying(false);
	};

	useEffect(() => {
		const checkWinner = () => {
			console.table(board);
			// check rows
			for (let i = 0; i < 3; i++) {
				if (
					(board[i][0] === player &&
						board[i][1] === player &&
						board[i][2] === player) ||
					(board[0][i] === player &&
						board[1][i] === player &&
						board[2][i] === player)
				) {
					console.log("win by rows or columns");
					console.log(`${player} wins`);
					setIsPlaying(false);
					setWinner(player);
				}
			}
			// check diagonals
			if (
				(board[0][0] === player &&
					board[1][1] === player &&
					board[2][2] === player) ||
				(board[0][2] === player &&
					board[1][1] === player &&
					board[2][0] === player)
			) {
				console.log("win by diagonals");
				console.log(`${player} wins`);
				setIsPlaying(false);
				setWinner(player);
			}
			return false;
		};

		// check if the game is a draw
		const checkDraw = () => {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (board[i][j] == "") {
						return false;
					}
				}
			}
			return true;
		};

		// check if the game is over
		const checkGameOver = () => {
			console.log("checking game");
			checkWinner();

			if (checkDraw()) {
				console.log(`Draw game`);
				setIsPlaying(false);
				setWinner("Draw");
			}
		};

		checkGameOver();

		return () => {
			setIsPlaying(true);
			setWinner("");
		};
	}, [board, player]);

	return (
		<section>
			<h1 className="text-center text-2xl">
				{isPlaying
					? `Its ${player}'s turn!`
					: winner
						? winner
						: "Board"}
			</h1>
			<Board
				board={board}
				setBoard={setBoard}
				player={player}
				setPlayer={setPlayer}
				isPlaying={isPlaying}
			/>
			<div className="flex justify-between py-2">
				<button
					onClick={handleClickPlay}
					disabled={isPlaying}
					className="bg-green-800 p-2 rounded-md disabled:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50"
				>
					Play!
				</button>
				<button
					onClick={handleClickReset}
					disabled={!isPlaying}
					className="bg-red-800 p-2 rounded-md disabled:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
				>
					Reset
				</button>
			</div>
		</section>
	);
}
