import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

import styles from "./product_four.module.css";
import Divider from "@/Components/Divider/Divider";
import LightboxGallery from "../Lightbox/Lightbox";

const ProductFour = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[0].productDescription?.tytulProduktu;
	const gallery =
		data.allGaleria?.nodes[0].productDescription?.galeriazdjec?.nodes;

	const lightboxImages = gallery?.map((image) => ({
		src: image.mediaItemUrl || "",
		alt: image.title || undefined,
	}));

	return (
		<article
			className={styles.productContent}
			id='sztukateria'
		>
			<div className={styles.sectionTitle}>
				<p>Sztukateria</p>
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionDetails}>
					<h3>{title}</h3>
					<Divider
						width={80}
						marginX='mx-auto'
					/>
				</div>
				<div className={styles.imageBox}>
				{lightboxImages && (
					<LightboxGallery
						images={lightboxImages}
						divStyle=' w-full grid grid-cols-2 gap-2 lg:grid-cols-3'
						imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
					/>
				)}
				</div>
			</div>
		</article>
	);
};

export default ProductFour;
