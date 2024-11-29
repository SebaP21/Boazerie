import { CONTACT_CONTENT } from "@/graphql/ContactQuery";
import client from "../../../../lib/apolloClient";
import { ContactContentQuery } from "../../../../lib/generated/graphql";
import styles from "./contact-details.module.css";
import Link from "next/link";

const ContactDetails = async () => {
	const { data } = await client.query<ContactContentQuery>({
		query: CONTACT_CONTENT,
	});

	return (
		<div className={styles.contactItems}>
			<Link href={`tel:${data.pageBy?.contactForm?.tel}`}>
			<div className={styles.item}>
				<h5>Telefon</h5>
				<p>{data.pageBy?.contactForm?.tel}</p>
			</div>
			</Link>
			<Link href={`mailto:${data.pageBy?.contactForm?.eMail}`}>
			<div className={styles.item}>
				<h5>E-mail</h5>
				<p>{data.pageBy?.contactForm?.eMail}</p>
			</div>
			</Link>
			<div className="">
				<h5>Adres</h5>
				<p>{data.pageBy?.contactForm?.adres}</p>
			</div>
		</div>
	);
};

export default ContactDetails;
