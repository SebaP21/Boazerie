import styles from "../ProductDescription/productDescription.module.css";

import { ABOUT_CONTENT } from "@/graphql/AboutQuery";
import { AboutContentQuery } from "../../../../lib/generated/graphql";
import client from "../../../../lib/apolloClient";
import Divider from "@/Components/Divider/Divider";

export const ProductDescription = async () => {
	const { data } = await client.query<AboutContentQuery>({
		query: ABOUT_CONTENT,
	});

	const imageLink =
		data?.allONas?.nodes[0].about?.aboutPicture?.node.mediaItemUrl;

	const imageAlt = data?.allONas?.nodes[0].about?.aboutPicture?.node.slug;

	const firstDescription = data?.allONas?.nodes[0].about?.aboutDescription1;
	const secondDescription = data?.allONas?.nodes[0].about?.aboutDescription2;
	const sectionHeader = data?.allONas?.nodes[0].about?.aboutHeader;

	return (
		<section
			id='about'
			className='w-full flex justify-center'
		>
			<div className='w-[90%] flex flex-col gap-6 py-8 sm:w-[75%] md:py-12 lg:w-[90%] xl:w-[1100px]'>
				<div className='w-full text-center md:w-[80%] mx-auto'>
					<Divider
						width={80}
						marginX='mx-auto'
					/>
					<p className='text-xl font-serif'>{firstDescription}</p>
				</div>
				<div className='w-full flex flex-col gap-6 lg:flex-row lg:pt-12 lg:gap-16'>
					<div className='md:max-w-[70%] md:mx-auto lg:min-w-[40%]'>
						<img
							src={imageLink || "Ładowanie obrazu.."}
							alt={imageAlt || "Opis obrazu.."}
						/>

						<p className='pt-2 text-end font-serif'>
							Przykład naszej realizacji
						</p>
					</div>
					<div className='lg:self-center'>
						<h2 className='text-2xl'>{sectionHeader}</h2>
						<Divider width={65} />
						<p>{secondDescription}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
