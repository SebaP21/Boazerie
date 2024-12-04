import styles from "./faq.module.css";
import { FAQ_CONTENT } from "@/graphql/FaqQuery";
import { FaqContentQuery } from "../../../../lib/generated/graphql";
import client from "../../../../lib/apolloClient";
import { FaqCards } from "@/Components/home/FAQ/FaqComponents/FaqCards";
import Link from "next/link";
import Divider from "@/Components/Divider/Divider";

export const Faq = async () => {
	const { data } = await client.query<FaqContentQuery>({
		query: FAQ_CONTENT,
	});

	return (
		<section className='w-full flex justify-center'>
			<div className='w-[90%] flex flex-col gap-8 py-8'>
				<div className='w-full flex flex-col justify-center items-center gap-4'>
					<p className='font-serif text-lg'>Najczęściej zadawane pytania</p>
					<h2 className='text-4xl'>FAQ</h2>
					<Divider width={30} />
					<div className={styles.break}></div>
					<p className='text-center -mt-4'>
						Nie znalazłeś odpowiedzi na swoje pytanie? Zadzwoń do Nas lub
						skorzystaj z formularza kontaktowego
					</p>
					<Link
						href={"/kontakt"}
						className='w-[50%] border border-black px-2 text-center py-2 relative z-10 rounded-xl transition-all hover:bg-accent hover:text-black'
					>
						Kontakt
					</Link>
				</div>
				<FaqCards allFaqBox={data.allFaqBox} />
			</div>
		</section>
	);
};
