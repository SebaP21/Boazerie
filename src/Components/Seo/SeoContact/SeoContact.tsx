import { SEO_CONTACT_CONTENT } from "@/graphql/SeoContactQuery";
import client from "../../../../lib/apolloClient";
import { SeoContactContentQuery } from "../../../../lib/generated/graphql";
import Head from "next/head";

const SeoContact = async () => {
	const { data } = await client.query<SeoContactContentQuery>({
		query: SEO_CONTACT_CONTENT,
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

export default SeoContact;
