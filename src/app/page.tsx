import { Faq } from "@/Components/home/FAQ/Faq";
import  {HomeHeader}  from "@/Components/home/HomeHeader/HomeHeader";
import { Offer } from "@/Components/home/Offer/Offer";
import { ProductDescription } from "@/Components/home/ProductDescription/ProductDescription";


export default function Home() {
	return (
		<section>
			<HomeHeader />
			<ProductDescription />
			<Offer />
			<Faq />
		</section>
	);
}


