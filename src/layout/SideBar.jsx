import Link from "next/link";
import { useAppStore } from "../store";
import CloseIcon from "./CloseIcon";
import MenuItem from "./MenuItem";

export default function SideBar() {
  const { showSideBar, toggleSideBar } = useAppStore((state) => ({
    showSideBar: state.showSideBar,
    toggleSideBar: state.toggleSideBar,
  }));

  if (!showSideBar) {
    return <div className="hidden"></div>;
  }

  const SideBarMenuList = MenuItem.map((item) => {
    return (
      <li className="" key={item.title}>
        <Link href={item.href} passHref>
          <button className="w-full">
            <p className="w-[150px] text-black rounded-2xl flex items-center px-4 py-2 font-medium text-xl">
              {item.title}
            </p>
          </button>
        </Link>
      </li>
    );
  });

  return (
    <div className="pt-5 px-3 h-screen w-2/4 bg-white absolute z-10 top-0 transition duration-100 ease-linear flex flex-col gap-y-12 rounded-r-3xl border-[2px] border-[#999] text-black">
      <div>
        <CloseIcon onClick={() => toggleSideBar(false)} />
      </div>
      <div className="mr-10">
        <ul className="flex flex-col gap-y-2">{SideBarMenuList}</ul>
      </div>
      <div className="w-full text-right">
        <h1 className="text-3xl text-black font-bold cursor-pointer">4CG</h1>
      </div>
    </div>
  );
}
