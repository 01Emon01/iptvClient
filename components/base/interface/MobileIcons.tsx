import { PiListLight, PiUserLight } from "react-icons/pi";

export default function MobileIcons() {
  return (
    <div className="flex xl:hidden items-center justify-end gap-3.5 w-1/2 md:w-2/8 lg:w-2/7 px-2">
      {/* <div className="xz-zClass-responsive-navIcons text-gray-800">
        <PiUserLight size={28} />
      </div> */}
      <div className="xz-zClass-responsive-navIcons text-gray-800">
        <PiListLight size={28} />
      </div>
    </div>
  );
}
