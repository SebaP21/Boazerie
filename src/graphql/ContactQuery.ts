import { gql } from "@apollo/client";

export const CONTACT_CONTENT = gql`
	query ContactContent {
		pageBy(pageId: 85) {
			contactForm {
				adres
				eMail
				tel
			}
		}
	}
`;
