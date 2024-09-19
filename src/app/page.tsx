import { HomeHeader } from "@/Components/home/HomeHeader/HomeHeader";
import { ProductDescription } from "@/Components/home/ProductDescription/ProductDescription";
import { Offer } from "@/Components/home/Offer/Offer";
import { Faq } from "@/Components/home/FAQ/Faq";
import SeoHome from "@/Components/Seo/SeoHome/SeoHome";

export default function Home() {
	return (
		<>
			<SeoHome />
			<section>
				<HomeHeader />
				<ProductDescription />
				<Offer />
				<Faq />
			</section>
		</>
	);
}
