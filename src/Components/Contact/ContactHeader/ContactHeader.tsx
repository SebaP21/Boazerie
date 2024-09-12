import { PAGE_HEADER_CONTENT } from "@/graphql/PageHeaderContent";
import client from "../../../../lib/apolloClient";
import { PageHeaderQuery } from "../../../../lib/generated/graphql";
import styles from "./contact_header.module.css";

const ContactHeader = async () => {
	const { data } = await client.query<PageHeaderQuery>({
		query: PAGE_HEADER_CONTENT,
		variables: { pageId: 85 },
	});

	const bgImageUrl =
		data.pageBy?.pageHeading?.headerImageSrc?.node.mediaItemUrl;

	return (
		<>
			<section
				className={styles.contactHeader}
				style={{
					backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "Ładowanie",
				}}
			>
				<h3>{data.pageBy?.pageHeading?.pageHeader}</h3>
				<div className={styles.contactHeaderShadow}></div>
			</section>
		</>
	);
};

export default ContactHeader;
