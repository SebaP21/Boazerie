"use client";

import Image from "next/image";
import styles from "../ProductDescription/productDescription.module.css";
import image from "../../../Assets/Pictures/boazeria płycinowa biała ściana butelkowa zieleń.jpg";

import { ABOUT_CONTENT } from "@/graphql/AboutQuery";
import { useQuery } from "@apollo/client";
import { AboutQuery } from "../../../../lib/generated/graphql";

export const ProductDescription = () => {
	const { loading, error, data } = useQuery<AboutQuery>(ABOUT_CONTENT);

	if (loading) return <p>Ładowanie treści...</p>;
	if (error) return <p>Błąd: {error.message}</p>;

	const imageLink =
		data?.allONas?.nodes[0].about?.aboutPicture?.node.mediaItemUrl;

	const imageAlt = data?.allONas?.nodes[0].about?.aboutPicture?.node.slug;

	const firstDescription = data?.allONas?.nodes[0].about?.aboutDescription1;
	const secondDescription = data?.allONas?.nodes[0].about?.aboutDescription2;
	const sectionHeader = data?.allONas?.nodes[0].about?.aboutHeader;

	return (
		<section
			className={styles.section}
			id='about'
		>
			<div className={styles.contentWrapper}>
				<div className={styles.title}>
					<div className={styles.break}></div>
					<h5>{firstDescription}</h5>
				</div>
				<div className={styles.contentBox}>
					<div className={styles.contentImage}>
						<img
							src={imageLink || "Ładowanie obrazu.."}
							alt={imageAlt || "Opis obrazu.."}
						/>

						<h6>Przykład naszej realizacji</h6>
					</div>
					<div className={styles.contentDescription}>
						<h2>{sectionHeader}</h2>
						<div className={styles.break}></div>
						<p>{secondDescription}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
