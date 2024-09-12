import { LOGO_CONTENT } from "@/graphql/LogoQuery";
import client from "../../../lib/apolloClient";
import { LogoContentQuery } from "../../../lib/generated/graphql";
import Image from "next/image";

const FooterLogo = async () => {
	const { data } = await client.query<LogoContentQuery>({
		query: LOGO_CONTENT,
	});

	const link = data.allLogo?.nodes[1].logoImage?.logoImage?.node.link;
	const alt = `${data.allLogo?.nodes[0].title} ${data.allLogo?.nodes[0].logoImage?.logoImage?.node.slug}`;

	//sprawdzić rozmiary?

	return (
		<>
			<Image
				src={link ? link : ""}
				alt={alt}
				width={250}
				height={200}
			/>
		</>
	);
};

export default FooterLogo;
