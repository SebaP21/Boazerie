"use client";

import { FC, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxGalleryProps {
	images: { src: string; alt?: string  }[];
	divStyle: string;
	imgStyle?: string;
}

const LightboxGallery:FC<LightboxGalleryProps> = ({ images,divStyle,imgStyle }: LightboxGalleryProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<>
			<div className={`${divStyle}`}>
				{images.map((image, index) => (
					<div key={index}
                    className="w-full overflow-hidden rounded-md"
                    >
                        <img
						key={index}
						src={image.src}
						alt={image.alt  || ""}
						className={`${imgStyle}`}
						onClick={() => {
							setCurrentIndex(index);
							setIsOpen(true);
						}}
					/>
                    </div>
				))}
			</div>

			{isOpen && (
				<Lightbox
					open={isOpen}
					close={() => setIsOpen(false)}
					slides={images}
					index={currentIndex}
				/>
			)}
		</>
	);
};

export default LightboxGallery;
