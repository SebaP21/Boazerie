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
			<section className='w-full flex justify-center bg-background'>
				<div className='w-[90%] py-8 '>
					<div className='w-[30%] mx-auto text-center pb-8'>
						<Divider
							width={100}
							marginX='mx-auto'
						/>
						<h3 className='text-4xl'>Usługi</h3>
					</div>
					<div className='grid grid-cols-1 gap-12 '>
						{data?.allOffer?.nodes.slice(1).reverse().map((card, index) => (
							<Link
								href={`/portfolio/#${card.slug}`}
								key={index}
							>
								<div
									className={`relative rounded-md shadow-2xl overflow-hidden transition-all hover:scale-105`}
									key={card.offerCard?.offerPicture?.node.mediaItemId}
								>
									<img
										src={
											card.offerCard?.offerPicture?.node.mediaItemUrl || "obraz"
										}
										alt={card.offerCard?.offerPicture?.node.slug || "alt"}
										className='relative'
									/>
									<div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300 hover:opacity-0"></div>
									<div className="bg-white relative">
									<p className=' z-50 font-serif text-2xl text-center py-4'>
										{card.offerCard?.offerTitle}
									</p>
									</div>

									<div className={styles.offerCardShadow}></div>
								</div>
							</Link>
						))}
					</div>
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
