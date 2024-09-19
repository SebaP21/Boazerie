import { gql } from "@apollo/client";

export const SEO_PORTFOLIO_CONTENT = gql`
	query SeoPortfolioContent {
		pageBy(pageId: 83) {
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
