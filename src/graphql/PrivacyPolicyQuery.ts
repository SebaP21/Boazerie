import { gql } from "@apollo/client";

export const PRIVACY_POLICY_CONTENT = gql`
	query privacyPolicyContent {
		pageBy(pageId: 188) {
			privacyPolicyContent {
				privacypolicy
			}
			title(format: RENDERED)
		}
	}
`;
