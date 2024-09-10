import { FC } from "react";
import styles from "../faq.module.css";

type FaqQuestionProps = {
	question: string;
	onClick: () => void;
};

export const FaqQuestion: FC<FaqQuestionProps> = ({ question, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={styles.question}
		>
			<h6>{question}</h6>
		</div>
	);
};
