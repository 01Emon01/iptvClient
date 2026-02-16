"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      router.push("/shop");
      return;
    }

    router.push(`/shop?n=${encodeURIComponent(value)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="xz-zClass-search_product_form border border-gray-300 transition duration-300"
    >
      <div className="search-product_field">
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search for products"
          className="search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn-search">
          <IoSearchOutline color="#ffff" size={18} />
        </button>
      </div>
    </form>
  );
}
