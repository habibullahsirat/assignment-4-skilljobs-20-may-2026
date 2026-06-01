import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/Services";
import Category from "../components/homepage/Category";
import CategoryProducts from "../components/homepage/CategoryProducts";
import FlashDeals from "../components/homepage/FlashDeals";
import ProductsGrid from "../components/homepage/ProductsGrid";
import TopPick from "../components/homepage/TopPick";
import PopularBundles from "../components/homepage/PopularBundles";

export function Kizil() {
  return (
    <>
      <Hero />
      <Services />
      <Category />
      <CategoryProducts />
      <FlashDeals />
      <ProductsGrid />
      <TopPick />
      <PopularBundles />
    </>
  );
}
