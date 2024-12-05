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
				<div className='w-[90%] py-8 sm:w-[75%] md:py-12 md:w-[90%]  lg:py-16 xl:w-[1100px]'>
					<div className='w-[30%] mx-auto text-center pb-8'>
						<Divider
							width={100}
							marginX='mx-auto'
						/>
						<h3 className='text-4xl'>Usługi</h3>
					</div>
					<div className='grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10'>
						{data?.allOffer?.nodes
							.slice(1)
							.reverse()
							.map((card, index) => (
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
												card.offerCard?.offerPicture?.node.mediaItemUrl ||
												"obraz"
											}
											alt={card.offerCard?.offerPicture?.node.slug || "alt"}
											className='relative min-h-[60svh] md:min-h-[40svh] lg:min-h-[50svh]'
										/>
										<div className='hidden absolute inset-0 bg-black opacity-20 transition-opacity duration-300 hover:opacity-0 lg:flex'></div>
										<div className='bg-white relative'>
											<p className=' z-50 font-serif text-2xl text-center py-4 px-2'>
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
			<section className='w-full bg-white '>
				<div className='w-full flex justify-center items-center text-black opacity-30 uppercase text-4xl font-extrabold pt-12 pb-4 lg:text-9xl'>
					<p className='w-full text-center tracking-widest text-outline text-white pb-6 '>
						Sztukateria
					</p>
				</div>
				<div
					className='w-full flex justify-center items-center py-24 md:min-h-[70svh]'
					style={{ backgroundImage: `url(${moldingLink})` }}
				>
					<div className='w-[90%] p-6 bg-white rounded-md sm:w-[75%] md:w-[60%] xl:p-12 xl:w-[1100px]'>
						<article className='flex flex-col gap-1'>
							<h3 className='text-3xl'>
								{data?.allOffer?.nodes[0].offerCard?.offerTitle}
							</h3>
							<Divider width={50} />
							<div className='pb-4'>
								{data?.allOffer?.nodes[0].offerCard?.offerDescription}
							</div>
							<Link
								href={`/portfolio/#${data.allOffer?.nodes[0].slug}`}
								className='w-[50%] md:w-[35%] lg:w-[30%] xl:w-[20%] border border-black px-2 text-center py-2 relative z-10 rounded-xl transition-all hover:bg-accent hover:text-black'
							>
								Zobacz więcej
							</Link>
						</article>
					</div>
				</div>
			</section>
		</>
	);
};
