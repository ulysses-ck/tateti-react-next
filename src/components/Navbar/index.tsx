import GithubSVG from "../GithubSVG";

export default function Navbar() {
	return (
		<nav className="flex justify-between p-2">
			<h1 className="text-2xl">Tic Tac Toe Game</h1>
			<a
				href="https://github.com/ulysses-ck/tateti-react-next"
				target="_blank"
			>
				<GithubSVG wSize="35px" hSize="35px" />
			</a>
		</nav>
	);
}
