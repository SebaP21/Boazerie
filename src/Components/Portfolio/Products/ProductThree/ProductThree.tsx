import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

import styles from "./product_three.module.css";
import Image from "next/image";

const ProductThree = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[3].productDescription?.tytulProduktu;
	const description =
		data.allGaleria?.nodes[3].productDescription?.portfolioProductDescription;

	const gallery =
		data.allGaleria?.nodes[3].productDescription?.galeriazdjec?.nodes;

	return (
		<article className={styles.productContent}>
			<div className={styles.sectionTitle}>
				<p>Panelowa</p>
			</div>
			<div className={styles.description}>
				<div className={styles.imageBox}>
					{gallery?.map((image) => (
						<div
							className={styles.imageItem}
							key={image.slug}
						>
							<Image
								src={image.mediaItemUrl || ""}
								alt={image.title || ""}
								width={600}
								height={600}
							/>
						</div>
					))}
				</div>

				<div className={styles.descriptionDetails}>
					<h3>{title}</h3>
					<div className={styles.break}></div>
					<p>{description}</p>
				</div>
			</div>
		</article>
	);
};

export default ProductThree;
