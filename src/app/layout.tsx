"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";
import { NavDesktop } from "@/Components/Nav/NavDesktop/NavDesktop";
import { NavMobile } from "@/Components/Nav/NavMobile/NavMobile";
import { Footer } from "@/Components/Footer/Footer";

export const workSans = Work_Sans({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ApolloProvider client={client}>
			<html lang='en'>
				<head>
					<link
						href='https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap'
						rel='stylesheet'
					/>
				</head>
				<body className={workSans.className}>
					<NavDesktop />
					<NavMobile />
					{children}
					<Footer />
				</body>
			</html>
		</ApolloProvider>
	);
}
