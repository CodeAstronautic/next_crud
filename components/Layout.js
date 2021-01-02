import Head from "next/head";

export function Layout({ children }) {
	return (
		<main className="layout">
			<Head>
				<title>NextJS | CRUD App</title>
			</Head>
			{children}
		</main>
	);
}
