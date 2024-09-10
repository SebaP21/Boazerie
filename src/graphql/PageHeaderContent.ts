import { gql } from "@apollo/client";

export const PAGE_HEADER_CONTENT = gql`
	query PageHeaderContent($pageId: Int!) {
		pageBy(pageId: $pageId) {
			pageHeading {
				pageHeader
				headerImageSrc {
					node {
						mediaItemUrl
						slug
						title(format: RENDERED)
					}
				}
			}
		}
	}
`;
