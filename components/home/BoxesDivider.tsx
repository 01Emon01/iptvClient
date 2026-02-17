import BestSeller from "./BestSeller";
import NewArrivals from "./NewArrivals";

export default async function BoxesDivider() {
  const res = await fetch(
    `${process.env.API_BASE_URL}/data/admin/products/category/boxes`,
  );
  const data = await res.json();
  return (
    <>
      <NewArrivals data={data} />
      <BestSeller data={data} />
    </>
  );
}
