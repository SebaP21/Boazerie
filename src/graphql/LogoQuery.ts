import { gql } from "@apollo/client";

export const LOGO_CONTENT = gql`
	query LogoContent {
		allLogo {
			nodes {
				logoImage {
					logoImage {
						node {
							link
							title(format: RENDERED)
							slug
						}
					}
				}
				title(format: RENDERED)
			}
		}
	}
`;
