// styles
import "./globals.css";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-screen min-w-screen flex flex-col justify-between">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
