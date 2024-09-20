import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

import styles from "./product_four.module.css";
import Image from "next/image";

const ProductFour = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[0].productDescription?.tytulProduktu;
	const gallery =
		data.allGaleria?.nodes[0].productDescription?.galeriazdjec?.nodes;

	return (
		<article className={styles.productContent}>
			<div className={styles.sectionTitle}>
				<p>Sztukateria</p>
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionDetails}>
					<h3>{title}</h3>
					<div className={styles.break}></div>
				</div>
				<div className={styles.imageBox}>
					{gallery?.map((image) => (
						<div
							className={styles.imageItem}
							key={`${image.slug} + ${image.uri}`}
						>
							<Image
								src={image.mediaItemUrl || ""}
								alt={image.title || "alt"}
								width={1200}
								height={1200}
							/>
						</div>
					))}
				</div>
			</div>
		</article>
	);
};

export default ProductFour;
