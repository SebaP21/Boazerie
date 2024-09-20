import { PortfolioHeader } from "@/Components/Portfolio/PortfolioHeader/PortfolioHeader";
import { Products } from "@/Components/Portfolio/Products/Products";
import { SEO_PORTFOLIO_CONTENT } from "@/graphql/SeoPortfolioQuery";
import client from "../../../lib/apolloClient";
import { SeoPortfolioContentQuery } from "../../../lib/generated/graphql";

const Portfolio = () => {
	return (
		<>
			<PortfolioHeader />
			<Products />
		</>
	);
};

export default Portfolio;

export async function generateMetadata() {
	const { data } = await client.query<SeoPortfolioContentQuery>({
		query: SEO_PORTFOLIO_CONTENT,
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
