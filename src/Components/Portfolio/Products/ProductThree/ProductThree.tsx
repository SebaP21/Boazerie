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
			className='w-full flex justify-center'
			id='boazeria-panelowa'
		>
			<div className='w-[95%] flex flex-col gap-6'>
				<div className='w-full flex justify-center items-center text-black opacity-30 uppercase text-5xl font-extrabold pt-12 pb-4 '>
					<p className='w-full text-center tracking-widest text-outline text-white '>
						Panelowa
					</p>
				</div>
				<div className='flex flex-col-reverse gap-6 '>
					<div className=''>
						{lightboxImages && (
							<LightboxGallery
								images={lightboxImages}
								divStyle='w-full grid grid-cols-1 gap-2'
								imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
							/>
						)}
					</div>

					<div className='w-[80%] mx-auto'>
						<h3 className='text-3xl text-center'>{title}</h3>
						<Divider
							width={100}
							marginX='mx-auto'
						/>
						<p className='text-center'>{description}</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ProductThree;
