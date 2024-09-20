import { LOGO_CONTENT } from "@/graphql/LogoQuery";
import client from "../../../lib/apolloClient";
import { LogoContentQuery } from "../../../lib/generated/graphql";
import Image from "next/image";
import { FC } from "react";

type NavLogoProps = {
	width: number;
};

const NavLogo: FC<NavLogoProps> = async ({ width }) => {
	const { data } = await client.query<LogoContentQuery>({
		query: LOGO_CONTENT,
	});

	const link = data.allLogo?.nodes[1].logoImage?.logoImage?.node.link;
	const alt = `${data.allLogo?.nodes[1].title} ${data.allLogo?.nodes[1].logoImage?.logoImage?.node.slug}`;

	const height = width;
	return (
		<>
			<Image
				src={link ? link : ""}
				alt={alt}
				width={width}
				height={height}
			/>
		</>
	);
};

export default NavLogo;
