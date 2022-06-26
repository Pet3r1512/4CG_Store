import { useAppContext } from "../hooks/state";
import Menu from "./Menu";
import Auth from "./Auth";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import HamburgerIcon from "./HamburgerIcon";

export default function Header() {
  const context = useAppContext();
  const [showSideBar, setShowSideBar] = context.sideBarState;
  return (
    <div className="max-w-7xl mx-auto pt-5 flex justify-between items-center relative px-3 sm:px-4 lg:px-0 text-white">
      <div className="flex justify-between items-center gap-x-14">
        <div className="w-full sm:hidden">
          <HamburgerIcon
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          />
        </div>
        <h1 className="font-dancing text-3xl font-bold cursor-pointer hidden sm:block">
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
