import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import logo from "../../Assets/Icons/logo-no-background.png";
import FooterLogo from "../Logo/FooterLogo";

export const Footer = () => {
	const date = new Date();
	let year = date.getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.logo}>
					<Link href={"/"}>
						<FooterLogo/>
					</Link>
				</div>
				<div className={styles.menu}>
					<h4>Menu</h4>
					<Link href={"/portfolio"}>Portfolio</Link>
					<Link href={"/kontakt"}>Kontakt</Link>
					<Link href={"/polityka-prywatnosci"}>Polityka prywatności</Link>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					{`Copyright © ${year}`}{" "}
					<a href='https://boazerieangielskie.pl'>boazerieangielskie.pl</a>
				</p>

				<p>
					Zaprojektowane przez{" "}
					<a href='https://dewwwelopment.pl'>dewwwelopment.pl</a>
				</p>
			</div>
		</footer>
	);
};

