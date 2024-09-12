import { ContactCard } from "@/Components/Contact/ContactCardsBox/ContactCard/ContactCard";
import { ContactCardsBox } from "@/Components/Contact/ContactCardsBox/ContactCardsBox";

import styles from "./contactPage.module.css";
import { MapComponent } from "@/Components/Contact/Maps/Maps";
import React from "react";
import client from "../../../lib/apolloClient";
import { CONTACT_CONTENT } from "@/graphql/ContactQuery";
import { ContactContentQuery } from "../../../lib/generated/graphql";
import ContactHeader from "@/Components/Contact/ContactHeader/ContactHeader";

const Contact = async () => {
	const { data } = await client.query<ContactContentQuery>({
		query: CONTACT_CONTENT,
	});

	return (
		<>
			<ContactHeader/>
			<ContactCardsBox>
				<ContactCard>
					<div className={styles.contactItems}>
						<div className={styles.item}>
							<h5>Telefon</h5>
							<p>{data.pageBy?.contactForm?.tel}</p>
						</div>
						<div className={styles.item}>
							<h5>E-mail</h5>
							<p>{data.pageBy?.contactForm?.eMail}</p>
						</div>
						<div className={styles.item}>
							<h5>Adres</h5>
							<p>{data.pageBy?.contactForm?.adres}</p>
						</div>
					</div>
				</ContactCard>
				<ContactCard>
					<div className={styles.contactForm}>
						<input
							type='text'
							id='name'
							placeholder='Imię'
						/>
						<input
							type='text'
							id='surname'
							placeholder='Nazwisko'
						/>
						<input
							type='email'
							id='email'
							placeholder='Adres e-mail'
						/>
						<input
							type='tel'
							id='tel'
							placeholder='Numer telefonu'
						/>
						<textarea
							name='message'
							id='message'
							placeholder='Wiadomość'
						></textarea>
						<button>Wyślij Wiadomość</button>
					</div>
				</ContactCard>
				<ContactCard>
					<MapComponent
						apiKey='AIzaSyBlv5yQ5rvL3lCy3DqlNDUTX_EEh0Fts-M'
						lat={50.48194122314453}
						lng={19.4344539642334}
					/>
				</ContactCard>
			</ContactCardsBox>
		</>
	);
};

export default Contact;
