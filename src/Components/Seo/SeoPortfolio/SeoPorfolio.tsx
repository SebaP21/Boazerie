import client from "../../../../lib/apolloClient";
import { SeoPortfolioContentQuery } from "../../../../lib/generated/graphql";
import Head from "next/head";
import { SEO_PORTFOLIO_CONTENT } from "@/graphql/SeoPortfolioQuery";

const SeoPortfolio = async () => {
	const { data } = await client.query<SeoPortfolioContentQuery>({
		query: SEO_PORTFOLIO_CONTENT,
	});

	const seo = data.pageBy?.seo;

	return (
		<Head>
			<title>{seo?.title}</title>
			<meta
				name='description'
				content={seo?.metaDesc as string}
			/>
			<meta
				property='og:title'
				content={seo?.opengraphTitle as string}
			/>
			<meta
				property='og:description'
				content={seo?.opengraphDescription as string}
			/>
			{seo?.opengraphImage && (
				<meta
					property='og:image'
					content={seo.opengraphImage as string}
				/>
			)}
		</Head>
	);
};

export default SeoPortfolio;
