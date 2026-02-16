import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function CategoryLists() {
  return (
    <ul>
      <li className="categoryList-items">
        <Link href={"/shop?c=iptv-box"}>
          <span className="categoryList-items-txt">IPTV Box</span>
        </Link>
      </li>
      <li className="categoryList-items">
        <Link href={"/shop?c=tv-subs"}>
          <span className="categoryList-items-txt">TV Subs</span>
        </Link>
        {/* <span>
          <MdOutlineKeyboardArrowRight />
        </span> */}
        {/* <div className="subCategory-list_wrapper">
          <ul>
            <li className="subCategory-list-items">
              <span className="subCategory-items-txt">Brushes</span>
            </li>
            <li className="subCategory-list-items">
              <span className="subCategory-items-txt">Eye Lashes</span>
            </li>
          </ul>
        </div> */}
      </li>
    </ul>
  );
}
