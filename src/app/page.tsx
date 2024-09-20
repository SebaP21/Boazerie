import { HomeHeader } from "@/Components/home/HomeHeader/HomeHeader";
import { ProductDescription } from "@/Components/home/ProductDescription/ProductDescription";
import { Offer } from "@/Components/home/Offer/Offer";
import { Faq } from "@/Components/home/FAQ/Faq";
import { SEO_HOME_CONTENT } from "@/graphql/SeoHomeQuery";
import client from "../../lib/apolloClient";
import { SeoHomeContentQuery } from "../../lib/generated/graphql";

export default function Home() {
	return (
		<>
			<section>
				<HomeHeader />
				<ProductDescription />
				<Offer />
				<Faq />
			</section>
		</>
	);
}

export async function generateMetadata() {
	const { data } = await client.query<SeoHomeContentQuery>({
		query: SEO_HOME_CONTENT,
	});

	const seo = data.pageBy?.seo;

	return {
		title: seo?.title,
		description: seo?.metaDesc as string,
		openGraph: {
			image: seo?.opengraphImage?.sourceUrl as string,
			description: seo?.opengraphDescription as string,
			title: seo?.opengraphTitle as string,
		},
	};
}
