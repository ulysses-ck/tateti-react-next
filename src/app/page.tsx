import dynamic from "next/dynamic";

const Board = dynamic(() => import("../components/Board"), { ssr: false });

export default function Home() {
	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<Board />
		</main>
	);
}
