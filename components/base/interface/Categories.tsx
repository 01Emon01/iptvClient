"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TbGridDots } from "react-icons/tb";
import CategoryLists from "./CategoryLists";

export default function Categories() {
  const [show, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShow(false);
  }, [pathname]);
  return (
    <>
      <div ref={menuRef} className="mk-zClass-navCate-content relative">
        <div
          className="mk-zClass-navCate_wrapper p-3 text-white cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          <div className="flex items-center justify-center gap-2">
            <TbGridDots size={24} />
            <span className="navCate-text">All Categories</span>
          </div>
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                opacity: 0,
                overflow: "hidden",
                transform: "translateY(15px)",
              }}
              animate={{
                opacity: 1,
                overflow: "hidden",
                transform: "translateY(0px)",
                transitionEnd: { overflow: "unset" },
              }}
              exit={{
                opacity: 0,
                transform: "translateY(15px)",
                overflow: "hidden",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mk-zClass-categoryList_wrapper shadow-lg"
            >
              <CategoryLists />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
