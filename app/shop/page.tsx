import ShopContent from "@/components/shop/ShopContent";

type Props = {
  searchParams?: {
    c?: string;
  };
};

export default async function page({ searchParams }: Props) {
  return (
    <div className="mk-zClass-shop-content_wrapper py-14">
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <ShopContent searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
