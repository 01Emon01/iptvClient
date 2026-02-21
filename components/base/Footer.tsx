import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

type Settings = {
  id: string;
  supportEmail: string;
  supportNo: string;
  footerInfo: string;
};

type DataProps = {
  settings: Settings;
};

export default function Footer({ settings }: DataProps) {
  return (
    <div className="xz-zClass-footer_wrapper text-gray-700">
      <div className="pt-12 pb-8 border-b border-gray-300">
        <div className="container mx-auto px-4 pb-5">
          <div className="flex gap-5 2xl:gap-15 flex-wrap xl:flex-nowrap">
            <div className="footer-logo flex flex-col gap-3">
              <Link href={"/"} className="mk-zClass-footer-logo">
                <Image
                  src={"/logo.png"}
                  height={50}
                  width={200}
                  alt="footer-logo"
                  priority={false}
                />
              </Link>
              <div className="max-w-140">{settings.footerInfo}</div>
            </div>
            <div className="footer-links-wrap w-full">
              <div className="flex flex-col gap-4">
                <h5 className="footer-col-header font-bold text-xl">
                  Get Help
                </h5>
                <div className="footer-links-content">
                  <ul className="footer-menu-list grid gap-3">
                    <li>
                      <Link href={"/privacy"}>Privacy Notice</Link>
                    </li>
                    <li>
                      <Link href={"/delivery"}>Delivery Information</Link>
                    </li>
                    <li>
                      <Link href={"/refunds"}>Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="footer-col-header font-bold text-xl">
                  Useful Links
                </h5>
                <div className="footer-links-content">
                  <ul className="footer-menu-list grid gap-3">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/shop"}>Shop</Link>
                    </li>
                    <li>
                      <Link href={"/shop?c=iptv-box"}>IPTV Box</Link>
                    </li>
                    <li>
                      <Link href={"/shop?c=tv-subs"}>TV Subs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="footer-col-header font-bold text-xl">
                  Customer Care
                </h5>
                <div className="footer-links-content">
                  <ul className="footer-menu-list grid gap-3">
                    <li>
                      <Link href={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link href={"/terms"}>Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="footer-col-header font-bold text-xl">Contact</h5>
                <div className="footer-links-content">
                  <ul className="footer-menu-list style-2 grid gap-3">
                    <li>
                      <span className="footer-icon">
                        <CiLocationOn size={20} />
                      </span>
                      <Link
                        href={"https://maps.app.goo.gl/peEQGEUpUNirHVKq6"}
                        className="footer-menu-conent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dragon Mart, Dubai, UAE
                      </Link>
                    </li>
                    <li>
                      <span className="footer-icon">
                        <CiPhone size={20} />
                      </span>
                      {settings.supportNo}
                    </li>
                    <li>
                      <span className="footer-icon">
                        <CiMail size={20} />
                      </span>
                      {settings.supportEmail}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-3 pt-3 pb-4">
          {/* <ul className="ft-social-list flex items-center justify-center gap-4">
            <li>
              <Link href={""}>
                <FaFacebookF size={20} />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <FaWhatsapp size={20} />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <FaInstagram size={20} />
              </Link>
            </li>
          </ul> */}
          <div className="copyright-text text-center">
            <span className="font-semibold">UAE IPTV BOX</span> © 2025. All
            right reserved
          </div>
        </div>
      </div>
    </div>
  );
}
