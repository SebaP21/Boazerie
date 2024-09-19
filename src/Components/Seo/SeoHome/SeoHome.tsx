import { SEO_HOME_CONTENT } from "@/graphql/SeoHomeQuery";
import client from "../../../../lib/apolloClient";
import { SeoHomeContentQuery } from "../../../../lib/generated/graphql";
import Head from "next/head";

const SeoHome = async () => {
	const { data } = await client.query<SeoHomeContentQuery>({
		query: SEO_HOME_CONTENT,
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

export default SeoHome;
