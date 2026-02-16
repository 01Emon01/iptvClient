"use client";
import { usePopupStore } from "@/lib/dialogStore";
import { PiSlidersHorizontalLight } from "react-icons/pi";

export default function FilterButton() {
  const toggleFilter = usePopupStore((state) => state.toggleFilter);
  return (
    <button className="filterShop-button flex" onClick={toggleFilter}>
      <span className="filter-icon">
        <PiSlidersHorizontalLight />
      </span>
      <span className="text-sm">Filter</span>
    </button>
  );
}
