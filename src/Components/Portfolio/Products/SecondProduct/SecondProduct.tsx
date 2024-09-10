import { productImagesProps } from "../FirstProduct/FirstProduct";
import styles from "./second_product.module.css";
import image1 from "../../../../Assets/Pictures/boazeria kasetonowa w stylu angielskim biała.jpg";
import image2 from "../../../../Assets/Pictures/tapeta i boazeria kasetonowa w kolorze białym.jpg";
import image3 from "../../../../Assets/Pictures/boazeria na wymiar kasetonowa śląsk.jpg";
import image5 from "../../../../Assets/Pictures/boazeria kasetonowa biała w całym pokoju.jpg";
import Image from "next/image";

export const SecondProduct = () => {
	return (
		<article className={styles.productContent}>
			<div className={styles.title}>
				<p>Kasetonowa</p>
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionDetails}>
					<h3>Boazeria kasetonowa</h3>
					<div className={styles.break}></div>
					<p>
						W skład boazerii kasetonowej wchodzą te same elementy co w
						płycinowej lecz na końcu w środku ramki montowany jest wyfrezowany
						lub wykańczany ćwierćwałkiem kaseton.
					</p>
				</div>
				<div className={styles.descriptionImages}>
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
			</div>
		</article>
	);
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
		src: image5,
		alt: "",
	},
];
