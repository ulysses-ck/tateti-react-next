"use client";
// react
import { useState, useEffect } from "react";

// components
import Board from "../Board";

export default function Game() {
	// board is a 3x3 grid of cells
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	// state to handle play of the game
	const [isPlaying, setIsPlaying] = useState(false);

	// player is either "X" or "O"
	const [player, setPlayer] = useState("X");

	useEffect(() => {
		// check if there is a winner
		const checkWinner = (board: string[][], player: string) => {
			// check rows
			for (let i = 0; i < 3; i++) {
				if (
					board[i][0] === player &&
					board[i][1] === player &&
					board[i][2] === player
				) {
					return true;
				}
			}
			// check columns
			for (let i = 0; i < 3; i++) {
				if (
					board[0][i] === player &&
					board[1][i] === player &&
					board[2][i] === player
				) {
					return true;
				}
			}
			// check diagonals
			if (
				board[0][0] === player &&
				board[1][1] === player &&
				board[2][2] === player
			) {
				return true;
			}
			if (
				board[0][2] === player &&
				board[1][1] === player &&
				board[2][0] === player
			) {
				return true;
			}
			return false;
		};

		// check if the game is a draw
		const checkDraw = (board: string[][]) => {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (board[i][j] === "") {
						return false;
					}
				}
			}
			return true;
		};

		// check if the game is over
		const checkGameOver = (board: string[][], player: string) => {
			if (checkWinner(board, player)) {
				alert(`${player} wins!`);
				setBoard([
					["", "", ""],
					["", "", ""],
					["", "", ""],
				]);
			} else if (checkDraw(board)) {
				alert("Draw!");
				setBoard([
					["", "", ""],
					["", "", ""],
					["", "", ""],
				]);
			}
		};

		checkGameOver(board, player);
	}, [board, player]);

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
	return (
		<section>
			<h1 className="text-center text-2xl">Tic tac toe</h1>
			<Board
				board={board}
				player={player}
				setBoard={setBoard}
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
