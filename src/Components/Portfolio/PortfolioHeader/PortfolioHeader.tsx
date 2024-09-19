import { PAGE_HEADER_CONTENT } from "@/graphql/PageHeaderContent";
import client from "../../../../lib/apolloClient";
import { PageHeaderQuery } from "../../../../lib/generated/graphql";
import styles from "./portfolioHeader.module.css";

export const PortfolioHeader = async () => {
	const { data } = await client.query<PageHeaderQuery>({
		query: PAGE_HEADER_CONTENT,
		variables: { pageId: 83 },
	});

	const backgroundImage =
		data.pageBy?.pageHeading?.headerImageSrc?.node.mediaItemUrl;

	const title = data.pageBy?.pageHeading?.pageHeader;

	return (
		<>
			<header
				className={styles.portfolioHeader}
				style={{ backgroundImage: `url(${backgroundImage})` || "none" }}
			>
				<h3>{title}</h3>
				<div className={styles.portfolioHeaderShadow}></div>
			</header>
		</>
	);
};
