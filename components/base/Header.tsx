import Image from "next/image";
import Link from "next/link";
import { PiHeadphonesThin } from "react-icons/pi";
import Search from "./interface/Search";
import MobileIcons from "./interface/MobileIcons";
import Navbar from "./interface/Navbar";
import Navlink from "./interface/Navlink";

export default function Header() {
  return (
    <div className="xz-header-wrapper border-b border-gray-300 xl:border-0">
      <div className="xz-zClass-inner_header">
        <div className="xl:container xl:mx-auto">
          <div className="py-2 xl:pt-4 xl:pb-6">
            <div className="flex flex-wrap mx-2">
              <div className="flex items-center w-1/2 md:w-2/8 lg:w-2/7 px-2">
                <div className="xz-zClass-logo">
                  <Link href={"/"}>
                    <Image
                      src={"/logo.png"}
                      height={50}
                      width={180}
                      alt="logo"
                      priority={false}
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-8 justify-center md:w-4/8 lg:w-3/7 px-2">
                <div className="navbar-items-link">
                  <Navlink href="/">Home</Navlink>
                </div>
                <div className="navbar-items-link">
                  <Navlink href="/shop">Shop</Navlink>
                </div>
                <div className="navbar-items-link">
                  <Navlink href="/shop?c=iptv-box">IPTV Box</Navlink>
                </div>
                <div className="navbar-items-link">
                  <Navlink href="/shop?c=tv-subs">TV Subs</Navlink>
                </div>
                <div className="navbar-items-link">
                  <Navlink href="/contact">Contact</Navlink>
                </div>
              </div>
              <MobileIcons />
              <div className="hidden xl:flex items-center justify-end gap-3 w-2/7 px-2">
                <PiHeadphonesThin size={40} className="text-gray-700" />
                <div className="text-gray-700">
                  <div>
                    Call us now:{" "}
                    <span className="primary-color">+880 18 3782 7212</span>
                  </div>
                  <div>
                    Email:{" "}
                    <span className="secondary-color">
                      makeupzone@support.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
