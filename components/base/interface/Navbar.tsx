import AccountBtn from "./AccountBtn";
import Categories from "./Categories";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="xz-zClass-navbar_wrapper bg-primary-color hidden xl:block">
      <div className="container mx-auto">
        <div className="flex flex-wrap h-12 mx-2">
          <div className="flex w-2/7 px-2 gap-7">
            <Categories />
          </div>
          <div className="hidden md:flex items-center justify-center md:w-4/8 lg:w-3/7 px-2">
            <Search />
          </div>
          <div className="w-2/7 px-2 flex item-center justify-end">
            <div className="navbar-btns-right text-gray-800">
              <div className="nav-icons h-full">
                <AccountBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
