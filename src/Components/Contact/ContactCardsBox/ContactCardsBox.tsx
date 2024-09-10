import { ReactNode } from "react";
import styles from "./contact_cards_box.module.css";

export const ContactCardsBox = ({ children }: { children: ReactNode }) => {
	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>{children}</div>
		</section>
	);
};
