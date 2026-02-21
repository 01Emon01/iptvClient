"use client";
import { usePopupStore } from "@/lib/dialogStore";
import { PiListLight } from "react-icons/pi";

export default function MobileIcons() {
  const toggleMenu = usePopupStore((state) => state.toggleMenu);
  return (
    <div className="flex xl:hidden items-center justify-end gap-3.5 w-1/2 md:w-2/8 lg:w-1/7 px-2">
      <div
        className="xz-zClass-responsive-navIcons text-gray-800"
        onClick={toggleMenu}
      >
        <PiListLight size={28} />
      </div>
    </div>
  );
}
