"use client";

import Image from "next/image";
import styles from "./first_product.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import image1 from "../../../../Assets/Pictures/boazeria płycinowa biała ściana butelkowa zieleń.jpg";
import image2 from "../../../../Assets/Pictures/boazeria płycinowa i stary zegar.jpg";
import image3 from "../../../../Assets/Pictures/boazeria angielska śląsk.jpg";
import image4 from "../../../../Assets/Pictures/boazeria angielska płycinowa.jpg";
import image5 from "../../../../Assets/Pictures/boazeria w stylu angielskim z dywanem płycinowa.jpg";
import image6 from "../../../../Assets/Pictures/boazeria w stylu angielskim z dywanem płycinowa.jpg";

export const FirstProduct = () => {
	return (
		<article className={styles.productContent}>
			<div className={styles.title}>
				<p>Płycinowa</p>
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionTitle}>
					<h3>Boazeria płycinowa</h3>
					{/* <div className={styles.break}></div> */}
				</div>
				<div className={styles.descriptionDetails}>
					<p>
						To rodzaj boazerii Składający się z listwy poziomej dolnej, listwy
						pionowej z dowolnym rozstawem oraz poziomej górnej. Na taki stelaż
						mocowana jest sklejka sosnowa. Cała taka podstawa przytwierdzana
						jest do ściany przy pomocy wkrętów. Dopiero po zamontowaniu
						ozdobnych listew (przypodłogowych, wieńczących i ramowych) boazeria
						osiąga piękny efekt.
					</p>
				</div>
			</div>
			<div className={styles.imagesBox}>
				{productImages.map((image, index) => (
					<div
						className={styles.imageItem}
						key={index}
					>
						<Image
							src={image.src}
							alt={image.alt}
							layout="fill"
						/>
					</div>
				))}
			</div>
            <div className={styles.break}></div>
		</article>
	);
};

export type productImagesProps = {
	src: string | StaticImport;
	alt: string;
};

const productImages: productImagesProps[] = [
	{
		src: image1,
		alt: "",
	},
	{
		src: image2,
		alt: "",
	},
	{
		src: image3,
		alt: "",
	},
	{
		src: image4,
		alt: "",
	},
	{
		src: image5,
		alt: "",
	},
	{
		src: image6,
		alt: "",
	},
];
