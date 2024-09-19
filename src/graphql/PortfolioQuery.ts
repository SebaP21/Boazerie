import { gql } from "@apollo/client";

export const PORTFOLIO_CONTENT = gql`
	query PortfolioContent {
		allGaleria {
			nodes {
				productDescription {
					tytulProduktu
					portfolioProductDescription
					galeriazdjec {
						nodes {
							mediaItemUrl
							slug
							title(format: RENDERED)
							uri
						}
					}
				}
			}
		}
	}
`;
