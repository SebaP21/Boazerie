import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";

// import styles from "./product_two.module.css";
// import Image from "next/image";
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

	const lightboxImagesOne = gallery?.slice(0, 4).map((image) => ({
		src: image.mediaItemUrl || "",
		alt: image.title || undefined,
	}));
	const lightboxImagesTwo = gallery?.slice(4).map((image) => ({
		src: image.mediaItemUrl || "",
		alt: image.title || undefined,
	}));

	return (
		<article
			className='w-full flex justify-center'
			id='boazeria-kasetonowa'
		>
			<div className='w-[95%] flex flex-col gap-2 xl:w-[1100px]'>
				<div className='w-full flex justify-center items-center text-black opacity-30 uppercase text-4xl font-extrabold pt-12 pb-4 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
					<p className='w-full text-center tracking-widest text-outline text-white '>
						Kasetonowa
					</p>
				</div>
				<div className='grid grid-cols-1 gap-6 justify-center items-center md:grid-cols-2 md:gap-2'>
					<div className='w-[80%] flex flex-col items-center justify-center mx-auto gap-2'>
						<h3 className='text-3xl'>{title}</h3>
						<Divider width={100} />
						<p className='text-center'>{description}</p>
					</div>
					<div>
						{lightboxImagesOne && (
							<LightboxGallery
								images={lightboxImagesOne}
								divStyle=' w-full grid grid-cols-2 gap-2 min-h-[500px]'
								imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
							/>
						)}
					</div>
				</div>
				<div>
					{lightboxImagesTwo && (
						<LightboxGallery
							images={lightboxImagesTwo}
							divStyle={
								"w-full grid grid-cols-2 gap-2 md:grid-cols-4"
							}
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
