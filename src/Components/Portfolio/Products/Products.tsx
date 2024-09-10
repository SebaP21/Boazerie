import { FirstProduct } from "./FirstProduct/FirstProduct"
import styles from "./products.module.css"
import { SecondProduct } from "./SecondProduct/SecondProduct"
import { ThirdProduct } from "./ThirdProduct/ThirdProduct"


export const Products  = () => {
    return(
        <section className={styles.productsWrapper}>
            <FirstProduct/>
            <SecondProduct/>
            <ThirdProduct/>
        </section>
    )
    
}