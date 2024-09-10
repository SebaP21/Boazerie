"use client";

import { FC, useState } from "react";
import { FaqContentQuery } from "../../../../../lib/generated/graphql";
import styles from "@/Components/home/FAQ/faq.module.css";
import { FaqCard } from "@/Components/home/FAQ/FaqComponents/FaqCard";

type FaqCardsProps = {
  allFaqBox: FaqContentQuery["allFaqBox"];
};
export const FaqCards: FC<FaqCardsProps> = ({ allFaqBox }) => {
  const [expandedCardId, setExpandedCardId] = useState<number | undefined>();

  const handleExpand = (index: number) => {
    setExpandedCardId((prev) => {
      if (prev === index) {
        return undefined;
      }

      return index;
    });
  };

  return (
    <div className={styles.faqContent}>
      {allFaqBox?.nodes.map((item, index) => (
        <div key={index}>
          <FaqCard
            question={item.title || "question"}
            answer={item.content?.slice(4, -5) || "answer"}
            expanded={expandedCardId === index}
            expand={() => handleExpand(index)}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};
