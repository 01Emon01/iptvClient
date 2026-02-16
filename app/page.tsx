import Banners from "@/components/home/Banners";
import BestSeller from "@/components/home/BestSeller";
import Divider2 from "@/components/home/Divider2";
import NewArrivals from "@/components/home/NewArrivals";

export default async function Home() {
  return (
    <>
      <Banners />
      <NewArrivals />
      <BestSeller />
      <Divider2 />
    </>
  );
}
