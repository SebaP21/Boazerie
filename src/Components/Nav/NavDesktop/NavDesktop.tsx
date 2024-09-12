import Link from "next/link";
import styles from "./nav_desktop.module.css";

import NavLogo from "@/Components/Logo/NavLogo";

export const NavDesktop = () => {
	const width = 200;
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Link href={"/"}>
					<NavLogo width={width} />
				</Link>
			</div>
			<div className={styles.links}>
				<Link href={"/"}>Strona główna</Link>
				<Link href={"/portfolio"}>Portfolio</Link>
				<Link href={"/kontakt"}>Kontakt</Link>
			</div>
		</nav>
	);
};
