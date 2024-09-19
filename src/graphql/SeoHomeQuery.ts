import { gql } from "@apollo/client";

export const SEO_HOME_CONTENT = gql`
	query SeoHomeContent {
		pageBy(pageId: 36) {
			seo {
				metaDesc
				title
				opengraphDescription
				opengraphTitle
				opengraphImage {
					sourceUrl(size: LARGE)
				}
			}
		}
	}
`;
