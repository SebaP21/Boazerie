import { ReactNode } from "react";
import styles from "./contact_card.module.css";

export const ContactCard = ({ children }: { children: ReactNode }) => {
	return <div className={styles.contactCard}>{children}</div>;
};
