import "./globals.css";
import Navigation from "components/Navigation";

export const metadata = {
	title: "Mycelial Funguy",
	description: "Mushroom cultivation blog and teks",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
