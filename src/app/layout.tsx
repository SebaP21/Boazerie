import "./globals.css";
import { Work_Sans } from "next/font/google";
import { NavDesktop } from "@/Components/Nav/NavDesktop/NavDesktop";
import { NavMobile } from "@/Components/Nav/NavMobile/NavMobile";
import { Footer } from "@/Components/Footer/Footer";
import Script from "next/script";

const workSans = Work_Sans({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang='pl'>
				<body className={workSans.className}>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-BVYFHD9XM9'
						strategy='afterInteractive'
					/>
					<Script
						id='google-analytics'
						strategy='afterInteractive'
					>
						{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BVYFHD9XM9'); 
          `}
					</Script>
					<NavDesktop />
					<NavMobile />
					{children}
					<Footer />
				</body>
			</html>
		</>
	);
}
