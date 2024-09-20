import ProductFour from "./ProductFour/ProductFour";
import ProductOne from "./ProductOne/ProductOne";
import ProductThree from "./ProductThree/ProductThree";
import ProductTwo from "./ProductTwo/ProductTwo";
import styles from "./products.module.css";

export const Products = () => {
	return (
		<section className={styles.productsWrapper}>
			<ProductOne />
			<ProductTwo />
			<ProductThree />
			<ProductFour />
		</section>
	);
};
