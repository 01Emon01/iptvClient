"use client";

import { usePopupStore } from "@/lib/dialogStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";

export default function Filter() {
  const filter = usePopupStore((state) => state.filter);
  const toggleFilter = usePopupStore((state) => state.toggleFilter);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1280);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    if (filter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [filter]);

  return (
    <>
      <div
        className={`mk-zClass-filter-wrap ${filter && isMobile ? "show" : ""}`}
      >
        <div className="inner-filter-wrapper">
          <div className="filter-header flex xl:hidden">
            <h5 className="text-gray-800">Filter</h5>
            <span className="filter-close-icon" onClick={toggleFilter}>
              <VscClose size={26} />
            </span>
          </div>
          <div className="filter-body">
            <div className="filter-category-widget border border-gray-200">
              <h6 className="text-xl text-gray-800 font-bold p-4">
                Categories
              </h6>
              <ul className="text-gray-700">
                <li>
                  <Link href={""}>Electronics</Link>
                </li>
                <li>
                  <Link href={""}>Beauty & Personal Care</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
