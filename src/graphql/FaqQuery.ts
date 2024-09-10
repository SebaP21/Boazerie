import { gql } from "@apollo/client";

export const FAQ_CONTENT = gql`
	query FaqContent {
		allFaqBox {
			nodes {
				content(format: RENDERED)
				title(format: RENDERED)
			}
		}
	}
`;
