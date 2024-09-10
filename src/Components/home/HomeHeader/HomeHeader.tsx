import Link from "next/link";
import styles from "./homeHeader.module.css";
import { PAGE_HEADER_CONTENT } from "@/graphql/PageHeaderContent";
import client from "../../../../lib/apolloClient";
import { PageHeaderQuery } from "../../../../lib/generated/graphql";

export const HomeHeader = async () => {
  const { data } = await client.query<PageHeaderQuery>({
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
