import { gql } from "@apollo/client";

export const SEO_CONTACT_CONTENT = gql`
	query SeoContactContent {
		pageBy(pageId: 85) {
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
