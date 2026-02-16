"use client";

import { usePopupStore } from "@/lib/dialogStore";

export default function AccountBtn() {
  const toggleLogin = usePopupStore((state) => state.toggleLogin);
  return (
    <>
      <span
        className="flex items-center font-semibold h-full"
        onClick={toggleLogin}
      >
        Login
      </span>
    </>
  );
}
