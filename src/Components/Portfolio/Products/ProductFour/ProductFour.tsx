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
			className='w-full flex justify-center'
			id='sztukateria'
		>
			<div className='w-[95%] flex flex-col gap-6 pb-8 xl:w-[1100px]'>
				<div className='w-full flex justify-center items-center text-black opacity-30 uppercase text-4xl font-extrabold pt-12 pb-4 sm:text-7xl md:text-8xl xl:text-9xl'>
					<p className='w-full text-center tracking-widest text-outline text-white '>
						Sztukateria
					</p>
				</div>
				<div className='w-full flex flex-col gap-6 justify-center items-center'>
					<div className={styles.descriptionDetails}>
						<h3 className='text-3xl text-center mb-4'>{title}</h3>
						<Divider
							width={80}
							marginX='mx-auto'
						/>
					</div>
					<div className={styles.imageBox}>
						{lightboxImages && (
							<LightboxGallery
								images={lightboxImages}
								divStyle=' w-full grid grid-cols-2 gap-2 md:grid-cols-3'
								imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
							/>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

export default ProductFour;
