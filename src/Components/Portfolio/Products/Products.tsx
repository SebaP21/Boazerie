import FirstProduct from "./FirstProduct/FirstProduct";
import ProductFour from "./ProductFour/ProductFour";
import ProductOne from "./ProductOne/ProductOne";
import styles from "./products.module.css";
import ProductThree from "./ProductThree/ProductThree";
import ProductTwo from "./ProductTwo/ProductTwo";
import SecondProduct from "./SecondProduct/SecondProduct";

import { ThirdProduct } from "./ThirdProduct/ThirdProduct";

export const Products = () => {
	return (
		<section className={styles.productsWrapper}>
			<ProductOne />
			<ProductTwo />
			<ProductThree />
			<ProductFour/>
		</section>
	);
};
