import styles from "./contact_header.module.css";

export const ContactHeader = () => {
	return (
		<>
			<section className={styles.contactHeader}>
				<h3>Kontakt</h3>
				<div className={styles.contactHeaderShadow}></div>
			</section>
		</>
	);
};
