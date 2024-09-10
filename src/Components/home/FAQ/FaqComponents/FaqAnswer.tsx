import { FC } from "react";
import styles from "../faq.module.css"

type FAQAnswerProps = {
	answer: string;
};

export const FaqAnswer: FC<FAQAnswerProps> = ({ answer }) => {
	return (
		<div className={styles.answer}>
			<p>{answer}</p>
		</div>
	);
};