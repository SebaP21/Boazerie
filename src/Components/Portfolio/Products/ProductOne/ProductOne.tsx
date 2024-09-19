import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

import styles from "./product_one.module.css";
import Image from "next/image";

const ProductOne = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[5].productDescription?.tytulProduktu;

	const description =
		data.allGaleria?.nodes[5].productDescription?.portfolioProductDescription;

	const gallery =
		data.allGaleria?.nodes[5].productDescription?.galeriazdjec?.nodes;

	return (
		<article className={styles.productContent}>
			<div className={styles.sectionTitle}>
				<p>Płycinowa</p>
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionTitle}>
					<h3>{title}</h3>
				</div>
				<div className={styles.descriptionDetails}>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.imageBox}>
				{gallery?.map((image) => (
					<div
						className={styles.imageItem}
						key={image.slug}
					>
						<Image
							src={image.mediaItemUrl || "link"}
							alt={image.title || "alt"}
							width={1200}
                            height={1200}
						/>
					</div>
				))}
			</div>
		</article>
	);
};

export default ProductOne;
