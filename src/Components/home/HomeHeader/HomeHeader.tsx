"use client";

import Link from "next/link";
import styles from "./homeHeader.module.css";
import { useQuery } from "@apollo/client";
import { PAGE_HEADER_CONTENT } from "@/graphql/PageHeaderContent";
import { PageHeaderQuery } from "../../../../lib/generated/graphql";

export const HomeHeader = () => {
	const pageId = 36;

	const { loading, error, data } = useQuery<PageHeaderQuery>(
		PAGE_HEADER_CONTENT,
		{
			variables: { pageId },
		}
	);

	if (loading) return <p>Ładowanie treści...</p>;
	if (error) return <p>Błąd: {error.message}</p>;

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
							<button>
								<Link href={"#about"}>Sprawdź</Link>
							</button>
						</div>
					</div>
					<div className={styles.sectionShadow}></div>
				</header>
			)}
		</>
	);
};
