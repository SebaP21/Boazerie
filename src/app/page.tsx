import { HomeHeader } from "@/Components/home/HomeHeader/HomeHeader";
import { ProductDescription } from "@/Components/home/ProductDescription/ProductDescription";
import { Offer } from "@/Components/home/Offer/Offer";
import { Faq } from "@/Components/home/FAQ/Faq";

export default function Home() {
  return (
    <section>
      <HomeHeader />
      <ProductDescription />
      <Offer />
      <Faq />
    </section>
  );
}
