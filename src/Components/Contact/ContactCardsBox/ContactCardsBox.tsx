import { ReactNode } from "react";
// import styles from "./contact_cards_box.module.css";

export const ContactCardsBox = ({ children }: { children: ReactNode }) => {
	return (
		<section className="w-full bg-background flex items-center justify-center py-12">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">{children}</div>
		</section>
	);
};
