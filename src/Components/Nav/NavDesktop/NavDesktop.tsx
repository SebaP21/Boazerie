import Link from "next/link";
import styles from "./nav_desktop.module.css";
import Image from "next/image";

import logo from "../../../Assets/Icons/logo-no-background.png";

export const NavDesktop = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Link href={"/"}>
					<Image
						src={logo}
						alt={"logo"}
						width={200}
					/>
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
