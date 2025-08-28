import { PORTFOLIO_CONTENT_TWO } from "@/graphql/PortfolioQueryTwo";
import client from "../../../../../lib/apolloClient";
import { PortfolioContentTwoQuery } from "../../../../../lib/generated/graphql";
// import styles from "./product_one.module.css";
import LightboxGallery from "@/Components/Portfolio/Products/Lightbox/Lightbox";
// import Divider from "@/Components/Divider/Divider";

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
		<article className='w-full flex justify-center'>
			<div className='w-[95%] flex flex-col gap-6 xl:w-[1100px]'>
				<div className='w-full flex justify-center items-center text-black opacity-30 uppercase text-5xl font-extrabold pt-12 pb-4 md:text-8xl sm:text-7xl lg:text-9xl'>
					<p className='w-full text-center tracking-widest text-outline text-white '>
						Płycinowa
					</p>
				</div>
				<div className='w-full flex flex-col gap-6 justify-center items-center md:w-[80%] md:mx-auto xl:w-[70%]'>
					<div className='border-b-2 border-accent w-[80%]'>
						<h3 className='text-3xl text-center mb-4'>{title}</h3>
					</div>
					<div>
						<p className='text-center'>{description}</p>
					</div>
				</div>
				<div className=' '>
					{lightboxImages && (
						<LightboxGallery
							images={lightboxImages}
							divStyle=' w-full grid grid-cols-2 gap-2 md:grid-cols-3'
							imgStyle='min-w-[100%] min-h-[100%] object-cover cursor-zoom-in hover:scale-110 transition-all'
						/>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProductOne;
