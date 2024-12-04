import Link from "next/link";
import styles from "./homeHeader.module.css";
import { PAGE_HEADER_CONTENT } from "@/graphql/PageHeaderContent"; 
import client from "../../../../lib/apolloClient";
import { PageHeaderContentQuery } from "../../../../lib/generated/graphql"; 

export const HomeHeader = async () => {
	const { data } = await client.query<PageHeaderContentQuery>({
		query: PAGE_HEADER_CONTENT,
		variables: { pageId: 36 },
	});

	const imageUrl =
		data?.pageBy?.pageHeading?.headerImageSrc?.node?.mediaItemUrl;

	return (
		<>
			{data && (
				<header
					className={styles.section}
					style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "none" }}
				>
					<div className={styles.titleBox}>
						<div className={styles.title}>
							<h1>{data.pageBy?.pageHeading?.pageHeader}</h1>
						</div>
						<div className={styles.titleButton}>
							
								<Link 
								className="border border-white px-6 py-3 relative z-10 rounded-xl"
								href={"#about"}>Sprawdź</Link>
						
						</div>
					</div>
					<div className={styles.sectionShadow}></div>
				</header>
			)}
		</>
	);
};
