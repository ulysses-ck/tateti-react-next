import Cell from "../Cell";

export default function Board({
	board,
	player,
	setBoard,
	setPlayer,
	isPlaying,
}: {
	board: string[][];
	player: string;
	setBoard: (board: string[][]) => void;
	setPlayer: (player: string) => void;
	isPlaying: boolean;
}) {
	return (
		<div className={"p-2 bg-white"}>
			<div className="grid grid-cols-3 grid-row-3 gap-2 w-fit h-fit">
				{board.map((row, rowIndex) => {
					return row.map((cell, cellIndex) => {
						return (
							<Cell
								isPlaying={isPlaying}
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
		</div>
	);
}
