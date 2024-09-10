import { FC } from "react";
import { FaqQuestion } from "./FaqQuestion";
import { FaqAnswer } from "./FaqAnswer";
import styles from "../faq.module.css";

export type FaqCardProps = {
	question: string;
	answer: string;

	expanded: boolean;
	expand: () => void;
};

export const FaqCard: FC<FaqCardProps> = ({
	question,
	answer,
	expanded,
	expand,
}) => {
	return (
		<>
			{expanded ? (
				<div className={styles.faqCardActive}>
					<FaqQuestion
						question={question}
						onClick={expand}
					/>
					<FaqAnswer answer={answer} />
				</div>
			) : (
				<div className={styles.faqCard}>
					<FaqQuestion
						question={question}
						onClick={expand}
					/>
				</div>
			)}
		</>
	);
};
