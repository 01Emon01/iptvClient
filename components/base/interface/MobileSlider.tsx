"use client";

import Image from "next/image";
import Link from "next/link";

import { VscClose } from "react-icons/vsc";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePopupStore } from "@/lib/dialogStore";
import { IoSearchOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

export default function MobileSlider() {
  const menu = usePopupStore((state) => state.menu);
  const toggleMenu = usePopupStore((state) => state.toggleMenu);

  const [tab, setTab] = useState("categories");

  const toogleTab = (name: string) => {
    setTab(name);
  };

  const router = useRouter();
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/shop?n=${encodeURIComponent(search)}`);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <div className={`mobile-slider ${menu ? "show" : ""}`}>
        <span className="mobile-slider-close" onClick={toggleMenu}>
          <VscClose size={30} />
        </span>
        <div className="mobile-slider-logo">
          <Link href={"/"}>
            <Image src={"/logo.png"} height={50} width={190} alt="logo" />
          </Link>
        </div>
        <div className="mobile-slider-content">
          <div className="mobile-slider-tab">
            <div className="mobile-tab-title mb-4">
              <ul className="mobile-tabTitle-line" role="tablist">
                <li
                  className={`mobile-tab-navItem ${tab === "links" && "active"}`}
                  role="presentation"
                  onClick={() => toogleTab("links")}
                >
                  Menu
                </li>
                <li className="br-line"></li>
                <li
                  className={`mobile-tab-navItem ${tab === "categories" && "active"}`}
                  role="presentation"
                  onClick={() => toogleTab("categories")}
                >
                  Categories
                </li>
              </ul>
            </div>
            <div className="mobile-tab-content">
              <AnimatePresence mode="wait">
                {tab === "categories" ? (
                  <motion.div
                    className="mobile-slider-tab-pane"
                    key="categories"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ul className="mobile-slider-navigation">
                      <li
                        className="mobile-navigation-item"
                        onClick={toggleMenu}
                      >
                        <Link
                          href={"/shop?c=iptv-box"}
                          className="flex items-center justify-between"
                        >
                          <span className="font-semibold">Tv Boxes</span>
                        </Link>
                      </li>
                      <li
                        className="mobile-navigation-item"
                        onClick={toggleMenu}
                      >
                        <Link
                          href={"/shop?c=tv-subs"}
                          className="flex items-center justify-between"
                        >
                          <span className="font-semibold">
                            Tv Subscriptions
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    className="mobile-slider-tab-pane"
                    key="menu"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <form
                      className="flex items-center relative"
                      onSubmit={handleSubmit}
                    >
                      <fieldset className="w-full">
                        <input
                          name="search"
                          type="text"
                          className="mobile-slider-search-input"
                          placeholder="Search for products"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </fieldset>
                      <button
                        type="submit"
                        className="mobile-slider-search-btn"
                      >
                        <IoSearchOutline size={24} />
                      </button>
                    </form>
                    <ul className="mobile-slider-navigation">
                      <li
                        className={`mobile-navigation-item ${pathname === "/" ? "active" : ""}`}
                        onClick={toggleMenu}
                      >
                        <Link
                          href={"/"}
                          className="flex items-center justify-between"
                        >
                          <span className="font-semibold">Home</span>
                        </Link>
                      </li>
                      <li
                        className={`mobile-navigation-item ${pathname === "/shop" ? "active" : ""}`}
                        onClick={toggleMenu}
                      >
                        <Link
                          href={"/shop"}
                          className="flex items-center justify-between"
                        >
                          <span className="font-semibold">Shop</span>
                        </Link>
                      </li>
                      <li
                        className={`mobile-navigation-item ${pathname === "/contact" ? "active" : ""}`}
                        onClick={toggleMenu}
                      >
                        <Link
                          href={"/contact"}
                          className="flex items-center justify-between"
                        >
                          <span className="font-semibold">Contact Us</span>
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="modal-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
