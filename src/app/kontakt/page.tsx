

import { ContactCard } from "@/Components/Contact/ContactCardsBox/ContactCard/ContactCard";
import { ContactCardsBox } from "@/Components/Contact/ContactCardsBox/ContactCardsBox";
import { ContactHeader } from "@/Components/Contact/ContactHeader/ContactHeader";

import styles from "./contactPage.module.css";
import { MapComponent} from "@/Components/Contact/Maps/Maps";
import React, { createContext } from 'react';



const Contact = () => {
	return (
		<>
			<ContactHeader />
			<ContactCardsBox>
				<ContactCard>
					<div className={styles.contactItems}>
						<div className={styles.item}>
							<h5>Telefon</h5>
							<p>+48 601-905-591</p>
						</div>
						<div className={styles.item}>
							<h5>E-mail</h5>
							<p>marekwolski952@gmail.com</p>
						</div>
						<div className={styles.item}>
							<h5>Adres</h5>
							<p>Reymonta 2</p>
							<p>42-400 Zawiercie</p>
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
						apiKey="AIzaSyBlv5yQ5rvL3lCy3DqlNDUTX_EEh0Fts-M"
						lat={50.48194122314453}
						lng={19.4344539642334}
					/>
				</ContactCard>
			</ContactCardsBox>
		</>
	);
};

export default Contact;
