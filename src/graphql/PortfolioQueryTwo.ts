import { gql } from "@apollo/client";

export const PORTFOLIO_CONTENT_TWO = gql`
	query PortfolioContentTwo {
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
