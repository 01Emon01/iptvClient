import ProductDetailsList from "@/components/jinja/ProductDetailsList";
import ProductDetailsSlider from "@/components/jinja/ProductDetailsSlider";
import ProductTabList from "@/components/jinja/ProductTabList";
import RelatedProducts from "@/components/jinja/RelatedProducts";

type ProductProps = {
  params: {
    slug: string;
  };
};

export default async function page({ params }: ProductProps) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.API_BASE_URL}/data/admin/products/${slug}`,
  );
  const data = await res.json();
  return (
    <div className="mk-zClass-product_wrapper py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-6 mx-2">
          <div className="w-full md:w-4/10 px-2">
            <div className="product-details-thumb-slider">
              <ProductDetailsSlider images={data.images} />
            </div>
          </div>
          <div className="w-full md:w-6/10 px-2">
            <ProductDetailsList data={data} />
          </div>
        </div>
      </div>
      <ProductTabList desc={data.desc} />
      <RelatedProducts />
    </div>
  );
}
