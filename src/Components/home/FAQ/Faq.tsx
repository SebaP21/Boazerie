"use client";
import styles from "./faq.module.css";
import { useState } from "react";
import { FaqCard, FaqCardProps } from "./FaqComponents/FaqCard";
import { useQuery } from "@apollo/client";
import { FAQ_CONTENT } from "@/graphql/FaqQuery";
import { FaqContentQuery } from "../../../../lib/generated/graphql";

export const Faq = () => {
	const [expandedCardId, setExpandedCardId] = useState<number | undefined>();

	const handleExpand = (index: number) => {
		setExpandedCardId((prev) => {
			if (prev === index) {
				return undefined;
			}

			return index;
		});
	};

	const { loading, error, data } = useQuery<FaqContentQuery>(FAQ_CONTENT);

	return (
		<section>
			<div className={styles.sectionWrapper}>
				<div className={styles.faqTitle}>
					<h4>Najczęściej zadawane pytania</h4>
					<h2>FAQ</h2>
					<div className={styles.break}></div>
					<p>
						Nie znalazłeś odpowiedzi na swoje pytanie? Zadzwoń do Nas lub
						skorzystaj z formularza kontaktowego
					</p>
					<button>Kontakt</button>
				</div>
				<div className={styles.faqContent}>
					{data?.allFaqBox?.nodes.map((item, index) => (
						<div key={index}>
							<FaqCard
								question={item.title || "question"}
								answer={item.content?.slice(4, -5) || "answer"}
								expanded={expandedCardId === index}
								expand={() => handleExpand(index)}
								key={index}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

type SingleFaqCardData = Pick<FaqCardProps, "answer" | "question">;

const faqContent: SingleFaqCardData[] = [
	{
		question: "Jaka jest cena wykonywanych przez nas boazerii/sztukaterii?",
		answer: "Cena to 600zł za m2",
	},
	{
		question: "Z jakiego materiału wykonana jest boazeria?",
		answer:
			"Materiały jakie wykorzystujemy do realizacji to drewno oraz sklejka.",
	},
	{
		question: "Jak długo trwa realizacja projektu?",
		answer: "Termin realizacji to 1 miesiąc.",
	},
	{
		question: "Czy przyjeżdżamy dokonywać pomiarów?",
		answer:
			"Pomiarów dokonujemy w obrębie 50km. Powyżej opieramy się na dokładnych pomiarach i zdjęciach klienta.",
	},
	{
		question:
			"Malowanie boazerii / sztukaterii odbywa się na miejscu realizacji, czy w warsztacie?",
		answer:
			"Malujemy dwukrotnie na warsztacie, a ostatnią warstwę wykonujemy u klienta.",
	},
	{
		question:
			"Jakiego rodzaju farby używamy do malowania boazerii oraz sztukaterii?",
		answer: "Do malowania używamy izolantu oraz farby akrylowej.",
	},
	{
		question: "Czy wysokość boazerii/sztukaterii jest ustalona, czy dowolna?",
		answer:
			"Wysokość dobierana jest indywidualnie do każdego pomieszczenia na życzenie klienta.",
	},
	{
		question: "Czy rodzaje filungów są ustalone, czy dowolne?",
		answer: "Wymiary filungów dostosowujemy indywidualnie na życzenie klienta.",
	},
	{
		question:
			"Czy boazeria / sztukateria na schodach jest droższa niż na poziomych powierzchniach?",
		answer: "Do realizacji w obrębie schodów należy doliczyć 50% ceny.",
	},
	{
		question: "Z jakiego rodzaju drewna korzystamy podczas realizacji?",
		answer: "Wysokiej jakości drewno sosnowe.",
	},
];
