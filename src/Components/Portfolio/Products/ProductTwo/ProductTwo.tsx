import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

import styles from "./product_two.module.css";
import Image from "next/image";
import Divider from "@/Components/Divider/Divider";
import LightboxGallery from "../Lightbox/Lightbox";

const ProductTwo = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[4].productDescription?.tytulProduktu;
	const description =
		data.allGaleria?.nodes[4].productDescription?.portfolioProductDescription;
	const gallery =
		data.allGaleria?.nodes[4].productDescription?.galeriazdjec?.nodes;

	const lightboxImages = gallery?.map((image) => ({
		src: image.mediaItemUrl || "",
		alt: image.title || undefined,
	}));

	return (
		<article
			className={styles.productContent}
			id='boazeria-kasetonowa'
		>
			<div className={styles.sectionTitle}>
				<p>Kasetonowa</p>
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionDetails}>
					<h3>{title}</h3>
					<Divider width={80} />
					<p>{description}</p>
				</div>
				<div className={styles.imageBox}>
					{lightboxImages && (
						<LightboxGallery
							images={lightboxImages}
							divStyle=' w-full grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[500px]'
							imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
						/>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProductTwo;
//test