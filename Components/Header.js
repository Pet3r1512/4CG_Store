import react from "react";
import { SideBarContext } from "../pages/index";
import Menu from "./Menu";
import Auth from "./Auth";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

export default function Header() {
  const context = react.useContext(SideBarContext);
  const [showSideBar, setShowSideBar] = context.show_side_bar;
  return (
    <div className="max-w-7xl mx-auto mt-5 flex justify-between items-center relative px-3 sm:px-4 lg:px-0 text-black">
      <div className="flex justify-between items-center gap-x-14">
        <div className="w-full sm:hidden">
          <HamburgerIcon
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          />
        </div>
        <h1 className="text-3xl font-bold cursor-pointer hidden sm:block">
          4CG
        </h1>
        <Logo />
        <Menu />
      </div>
      <div className="flex items-center gap-x-5">
        <SearchBar />
        <Auth />
      </div>
    </div>
  );
}

function HamburgerIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
