"use client";

import styles from "./offer.module.css";
import firstPhoto from "../../../Assets/Pictures/boazeria angielska butelkowa zieleń obraz kobiety.jpg";
import secondPhoto from "../../../Assets/Pictures/boazeria na wymiar kasetonowa śląsk.jpg";
import thirdPhoto from "../../../Assets/Pictures/boazeria angielska płycinowa na ścianie.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useQuery } from "@apollo/client";
import { OFFER_CONTENT } from "@/graphql/OfferQuery";
import {
	OfferContentQuery,
	OfferContentQueryVariables,
} from "../../../../lib/generated/graphql";

export const Offer = () => {
	const { loading, error, data } = useQuery<
		OfferContentQuery,
		OfferContentQueryVariables
	>(OFFER_CONTENT);

	if (loading) return <p>Ładowanie treści...</p>;
	if (error) return <p>Błąd: {error.message}</p>;

	const moldingLink =
		data?.allOffer?.nodes[0].offerCard?.offerPicture?.node.mediaItemUrl;

	return (
		<>
			<section className={styles.section}>
				<div className={styles.break}></div>
				<h2>Usługi</h2>
				<div className={styles.offerBox}>
					{data?.allOffer?.nodes.slice(1).map((card) => (
						<div
							className={styles.offerCard}
							key={card.offerCard?.offerPicture?.node.mediaItemId}
						>

							<img
								src={card.offerCard?.offerPicture?.node.mediaItemUrl || "obraz"}
								alt={
									card.offerCard?.offerPicture?.node.slug || offerData[0].title
								}
							/>
							<div className={styles.offerCardShadow}></div>

							<h3>{card.offerCard?.offerTitle}</h3>
						</div>
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
						<button>Zobacz więcej</button>
					</div>
				</div>
			</section>
		</>
	);
};

/////////////////////////////////////////
// Dane bazowe

type OfferCardProps = {
	title: string;
	src: string | StaticImport;
	alt: string;
};

const offerData: OfferCardProps[] = [
	{ title: "Boazeria płycinowa", src: firstPhoto, alt: "Boazeria płycinowa" },
	{
		title: "Boazeria kasetonowa",
		src: secondPhoto,
		alt: "Boazeria kasetonowa",
	},
	{ title: "Boazeria panelowa", src: thirdPhoto, alt: "Boazeria panelowa" },
];
