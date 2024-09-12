import { PRIVACY_POLICY_CONTENT } from "@/graphql/PrivacyPolicyQuery";
import client from "../../../lib/apolloClient";
import styles from "./privacy-policy.module.css";
import { PrivacyPolicyContentQuery } from "../../../lib/generated/graphql";

const PricacyPolicyPage = async () => {
	const { data } = await client.query<PrivacyPolicyContentQuery>({
		query: PRIVACY_POLICY_CONTENT,
	});

	return (
		<>
			<section className={styles.header}></section>
			<section className={styles.section}>
				<article className={styles.content}>
					<p>{data.pageBy?.privacyPolicyContent?.privacypolicy}</p>
				</article>
			</section>
		</>
	);
};

export default PricacyPolicyPage;
