import styles from "./portfolioHeader.module.css";

export const PortfolioHeader = () => {
	return (
		<>
			<header className={styles.portfolioHeader}>
				<h3>Nasze realizacje wykonywane są na terenie całego kraju!</h3>
				<div className={styles.portfolioHeaderShadow}></div>
			</header>
		</>
	);
};
