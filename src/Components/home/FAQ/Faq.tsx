import styles from "./faq.module.css";
import { FAQ_CONTENT } from "@/graphql/FaqQuery";
import { FaqContentQuery } from "../../../../lib/generated/graphql";
import client from "../../../../lib/apolloClient";
import { FaqCards } from "@/Components/home/FAQ/FaqComponents/FaqCards";

export const Faq = async () => {
  const { data } = await client.query<FaqContentQuery>({
    query: FAQ_CONTENT,
  });

  return (
    <section>
      <div className={styles.sectionWrapper}>
        <div className={styles.faqTitle}>
          <h4>Najczęściej zadawane pytania</h4>
          <h2>FAQ</h2>
          <div className={styles.break}></div>
          <p>
            Nie znalazłeś odpowiedzi na swoje pytanie? Zadzwoń do Nas lub
            skorzystaj z formularza kontaktowego
          </p>
          <button>Kontakt</button>
        </div>
        <FaqCards allFaqBox={data.allFaqBox} />
      </div>
    </section>
  );
};
