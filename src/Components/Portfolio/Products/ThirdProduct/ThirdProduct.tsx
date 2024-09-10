import styles from "./third_product.module.css";

import picture1 from "../../../../Assets/Pictures/sztukateria w stylu angielskim w salonie.jpg";
import picture2 from "../../../../Assets/Pictures/sztukateria ścienna na schodach.jpg";
import picture3 from "../../../../Assets/Pictures/sztukateria ścienna w mieszkaniu śląsk.jpg";
import picture4 from "../../../../Assets/Pictures/sztukateria ścienna w pokoju dziennym.jpg";
import picture5 from "../../../../Assets/Pictures/sztukateria ścienna jasna na schodach.jpg";
import picture6 from "../../../../Assets/Pictures/sztukateria ścienna z tapetą.jpg";
import { productImagesProps } from "../FirstProduct/FirstProduct";
import picture7 from "../../../../Assets/Pictures/boazeria kasetonowa surowa.jpg";
import Image from "next/image";

export const ThirdProduct = () => {
	return (
		<article className={styles.productContent}>
			<div className={styles.title}>
				<p>Sztukateria</p>
			</div>
			<div className={styles.productDetails}>
				<div className={styles.imagesBoxTitle}>
					<h3>Sztukateria ścienna</h3>
					<div className={styles.break}></div>
				</div>
				<div className={styles.imagesBox}>
					{productImages.map((image, index) => (
						<div
							className={styles.image}
							key={index}
						>
							<Image
								src={image.src}
								alt={image.alt}
							/>
						</div>
					))}
				</div>
				<div className={styles.productDetailsUlBox}>
					<div className={styles.productUlList}>
						<h3>W skład boazerii wchodzą :</h3>
						<ul>
							<li>- sklejka sosnowa</li>
							<li>- ramiaki poziome sosnowe</li>
							<li>- ćwierćwałki sosnowe</li>
							<li>- listwa wieńcząca sosnowa</li>
							<li>- listwa przypodłogowa sosnowa</li>
							<li>- opaska w postaci nakrycia</li>
						</ul>
					</div>
					<Image
						src={picture7}
						alt={""}
					/>
				</div>
			</div>
		</article>
	);
};

const productImages: productImagesProps[] = [
	{
		src: picture1,
		alt: "",
	},
	{
		src: picture2,
		alt: "",
	},
	{
		src: picture3,
		alt: "",
	},
	{
		src: picture4,
		alt: "",
	},
	{
		src: picture5,
		alt: "",
	},
	{
		src: picture6,
		alt: "",
	},
];
