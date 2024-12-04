import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";
import styles from "./product_one.module.css";
import LightboxGallery from "@/Components/Portfolio/Products/Lightbox/Lightbox";

const ProductOne = async () => {
	const { data } = await client.query<PortfolioContentTwoQuery>({
		query: PORTFOLIO_CONTENT_TWO,
	});

	const title = data.allGaleria?.nodes[5].productDescription?.tytulProduktu;
	const description =
		data.allGaleria?.nodes[5].productDescription?.portfolioProductDescription;
	const gallery =
		data.allGaleria?.nodes[5].productDescription?.galeriazdjec?.nodes;

	const lightboxImages = gallery?.map((image) => ({
		src: image.mediaItemUrl || "",
		alt: image.title || undefined,
	}));

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
			<div className=' '>
				{lightboxImages && (
					<LightboxGallery
						images={lightboxImages}
						divStyle=' w-full grid grid-cols-2 gap-2 lg:grid-cols-3'
						imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
					/>
				)}
			</div>
		</article>
	);
};

export default ProductOne;
