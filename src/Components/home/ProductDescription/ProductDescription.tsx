import styles from "../ProductDescription/productDescription.module.css";

import { ABOUT_CONTENT } from "@/graphql/AboutQuery";
import { AboutContentQuery } from "../../../../lib/generated/graphql";
import client from "../../../../lib/apolloClient";
import Divider from "@/Components/Divider/Divider";

export const ProductDescription = async () => {
	const { data } = await client.query<AboutContentQuery>({
		query: ABOUT_CONTENT,
	});

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
					<Divider
						width={60}
						marginX='mx-auto'
					/>
					<h5>{firstDescription}</h5>
				</div>
				<div className={styles.contentBox}>
					<div className={styles.contentImage}>
						<img
							src={imageLink || "Ładowanie obrazu.."}
							alt={imageAlt || "Opis obrazu.."}
						/>

						<h6 className='pt-2'>Przykład naszej realizacji</h6>
					</div>
					<div className={styles.contentDescription}>
						<h2>{sectionHeader}</h2>
						<Divider width={65} />
						<p>{secondDescription}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
