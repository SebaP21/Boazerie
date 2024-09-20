import { ContactCard } from "@/Components/Contact/ContactCardsBox/ContactCard/ContactCard";
import { ContactCardsBox } from "@/Components/Contact/ContactCardsBox/ContactCardsBox";
import React from "react";
import ContactHeader from "@/Components/Contact/ContactHeader/ContactHeader";
import ContactForm from "@/Components/Contact/ContactForm/ContactForm";
import ContactDetails from "@/Components/Contact/ContactDetails/ContactDetails";
import { SEO_CONTACT_CONTENT } from "@/graphql/SeoContactQuery";
import client from "../../../lib/apolloClient";
import { SeoContactContentQuery } from "../../../lib/generated/graphql";

const Contact = () => {
	return (
		<>
			<ContactHeader />
			<ContactCardsBox>
				<ContactCard>
					<ContactDetails />
				</ContactCard>
				<ContactCard>
					<ContactForm />
				</ContactCard>
			</ContactCardsBox>
		</>
	);
};

export default Contact;

export async function generateMetadata() {
	const { data } = await client.query<SeoContactContentQuery>({
		query: SEO_CONTACT_CONTENT,
	});

	const seo = data.pageBy?.seo;

	return {
		title: seo?.title,
		description: seo?.metaDesc as string,
		openGraph: {
			image: seo?.opengraphImage?.sourceUrl as string,
			description: seo?.opengraphDescription as string,
			title: seo?.opengraphTitle as string,
		},
	};
}
