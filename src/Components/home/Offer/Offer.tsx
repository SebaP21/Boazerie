import styles from "./offer.module.css";

import { OFFER_CONTENT } from "@/graphql/OfferQuery";
import { OfferContentQuery } from "../../../../lib/generated/graphql";
import client from "../../../../lib/apolloClient";
import Divider from "@/Components/Divider/Divider";
import Link from "next/link";

export const Offer = async () => {
	const { data } = await client.query<OfferContentQuery>({
		query: OFFER_CONTENT,
	});

	const moldingLink =
		data?.allOffer?.nodes[0].offerCard?.offerPicture?.node.mediaItemUrl;

	return (
		<>
			<section className={styles.section}>
				<Divider
					width={30}
					marginX='mx-auto'
				/>
				<h2>Usługi</h2>
				<div className={styles.offerBox}>
					{data?.allOffer?.nodes.slice(1).map((card) => (
						<Link href={`/portfolio/#${card.slug}`}>
							<div
								className={`${styles.offerCard} shadow-2xl`}
								key={card.offerCard?.offerPicture?.node.mediaItemId}
							>
								<img
									src={
										card.offerCard?.offerPicture?.node.mediaItemUrl || "obraz"
									}
									alt={card.offerCard?.offerPicture?.node.slug || "alt"}
								/>
								<h3 className='z-50'>{card.offerCard?.offerTitle}</h3>

								<div className={styles.offerCardShadow}></div>
							</div>
						</Link>
					))}
				</div>
			</section>
			<section className={styles.molding}>
				<div className={styles.moldingTitle}>
					<p>Sztukateria</p>
				</div>
				<div
					className={styles.moldingImageCarousel}
					style={{ backgroundImage: `url(${moldingLink})` }}
				>
					<div className={styles.moldingDescription}>
						<h3>{data?.allOffer?.nodes[0].offerCard?.offerTitle}</h3>
						<div className={styles.break}></div>
						<article>
							{data?.allOffer?.nodes[0].offerCard?.offerDescription}
						</article>
						<Link href={`/portfolio/#${data.allOffer?.nodes[0].slug}`}>
							<button>Zobacz więcej</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
