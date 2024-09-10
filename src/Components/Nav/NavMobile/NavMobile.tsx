"use client";

import Image from "next/image";
import styles from "./nav_mobile.module.css";
import logo from "../../../Assets/Icons/logo-no-background.svg";
import Link from "next/link";
import { useState } from "react";

export const NavMobile = () => {
	const [showMobile, setShowMobile] = useState(false);

	const handleClick = () => {
		setShowMobile((prev) => !prev);
	};

	return (
		<>
			{showMobile ? (
				<nav className={styles.nav}>
					<div className={styles.button}>
						<button onClick={handleClick}>X</button>
					</div>
					<div className={styles.logo}>
						<Link
							href={"/"}
							onClick={handleClick}
						>
							<Image
								src={logo}
								alt='logo-boazerie'
								width={250}
							
							/>
						</Link>
					</div>
					<div className={styles.navLinks}>
						<Link
							href={"/"}
							onClick={handleClick}
						>
							Strona główna
						</Link>
						<Link
							href={"/portfolio"}
							onClick={handleClick}
						>
							Portfolio
						</Link>
						<Link
							href={"/kontakt"}
							onClick={handleClick}
						>
							Kontakt
						</Link>
					</div>
				</nav>
			) : (
				<div className={styles.navNotActive}>
					<div className={styles.logo}>
						<Link href={"/"}>
						<Image
							src={logo}
							alt='logo'
							width={200}
						/>
						</Link>
					</div>
					<div
						className={styles.showMobileButtonContainer}
						onClick={handleClick}
					>
						<div className={styles.showMobileButton}></div>
					</div>
				</div>
			)}
		</>
	);
};
