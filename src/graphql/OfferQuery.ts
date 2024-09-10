import { gql } from "@apollo/client";

export const OFFER_CONTENT = gql`
	query OfferContent {
		allOffer {
			nodes {
				offerCard {
					offerDescription
					offerTitle
					offerPicture {
						node {
							mediaItemId
							mediaItemUrl
							title(format: RENDERED)
							slug
						}
					}
				}
			}
		}
	}
`;
