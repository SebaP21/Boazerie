import { gql } from "@apollo/client";

export const ABOUT_CONTENT = gql`
	query AboutContent {
		allONas {
			nodes {
				about {
					aboutDescription1
					aboutDescription2
					aboutHeader
					aboutPicture {
						node {
							mediaItemId
							mediaItemUrl
							slug
							title(format: RENDERED)
						}
					}
				}
			}
		}
	}
`;
