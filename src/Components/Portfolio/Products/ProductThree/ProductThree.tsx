import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

import styles from "./product_three.module.css";
import Image from "next/image";
import Divider from "@/Components/Divider/Divider";
import LightboxGallery from "../Lightbox/Lightbox";

const ProductThree = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[3].productDescription?.tytulProduktu;
	const description =
		data.allGaleria?.nodes[3].productDescription?.portfolioProductDescription;

	const gallery =
		data.allGaleria?.nodes[3].productDescription?.galeriazdjec?.nodes;

	const lightboxImages = gallery?.map((image) => ({
		src: image.mediaItemUrl || "",
		alt: image.title || undefined,
	}));

	return (
		<article
			className={styles.productContent}
			id='boazeria-panelowa'
		>
			<div className={styles.sectionTitle}>
				<p>Panelowa</p>
			</div>
			<div className={styles.description}>
				<div className={styles.imageBox}>
					{lightboxImages && (
						<LightboxGallery
							images={lightboxImages}
							divStyle=' w-full grid grid-cols-1 gap-2 '
							imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
						/>
					)}
				</div>

				<div className={styles.descriptionDetails}>
					<h3>{title}</h3>
					<Divider
						width={80}
						marginX='mx-auto'
					/>
					<p>{description}</p>
				</div>
			</div>
		</article>
	);
};

export default ProductThree;
