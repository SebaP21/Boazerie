import { PortfolioHeader } from "@/Components/Portfolio/PortfolioHeader/PortfolioHeader";
import { Products } from "@/Components/Portfolio/Products/Products";
import SeoPortfolio from "@/Components/Seo/SeoPortfolio/SeoPorfolio";

const Portfolio = () => {
	return (
		<>
		<SeoPortfolio/>
		<PortfolioHeader/>
		<Products/>
		</>
	);
};

export default Portfolio;
