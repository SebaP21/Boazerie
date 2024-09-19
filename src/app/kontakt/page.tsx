import { ContactCard } from "@/Components/Contact/ContactCardsBox/ContactCard/ContactCard";
import { ContactCardsBox } from "@/Components/Contact/ContactCardsBox/ContactCardsBox";
import { MapComponent } from "@/Components/Contact/Maps/Maps";
import React from "react";
import ContactHeader from "@/Components/Contact/ContactHeader/ContactHeader";
import ContactForm from "@/Components/Contact/ContactForm/ContactForm";
import ContactDetails from "@/Components/Contact/ContactDetails/ContactDetails";
import SeoContact from "@/Components/Seo/SeoContact/SeoContact";

const Contact = () => {
	const lat = 50.48194122314453;
	const lng = 19.4344539642334;

	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
	return (
		<>

			<SeoContact/>
			<ContactHeader />
			<ContactCardsBox>
				<ContactCard>
					<ContactDetails />
				</ContactCard>
				<ContactCard>
					<ContactForm />
				</ContactCard>
				{/* <ContactCard>
					<MapComponent
						apiKey={apiKey}
						lat={lat}
						lng={lng}
					/>
				</ContactCard> */}
			</ContactCardsBox>
		</>
	);
};

export default Contact;
