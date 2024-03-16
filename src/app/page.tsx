import dynamic from "next/dynamic";

const Game = dynamic(() => import("../components/Game"), { ssr: false });

export default function Home() {
	return (
		<main className="flex justify-center items-center">
			<Game />
		</main>
	);
}
