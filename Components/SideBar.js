import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Link from "next/link";

export default function SideBar() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  if (showSideBar) {
    const SideBarMenuList = MenuItem.map((item) => {
      return (
        <SideBarMenu key={item.title} href={item.href} title={item.title} />
      );
    });
    return (
      <div className="pt-5 px-3 h-screen w-2/4 bg-white absolute z-10 top-0 transition duration-100 ease-linear flex flex-col gap-y-12 rounded-r-3xl border-[2px] border-[#999] text-black">
        <div>
          <CloseIcon onClick={() => setShowSideBar(!showSideBar)} />
        </div>
        <div className="mr-10">
          <ul className="flex flex-col gap-y-2">{SideBarMenuList}</ul>
        </div>
        <div className="w-full text-right">
          <h1 className="text-3xl text-black font-bold cursor-pointer">4CG</h1>
        </div>
      </div>
    );
  } else if (!showSideBar) {
    return <div className="hidden"></div>;
  }
}

function SideBarMenu(props) {
  return (
    <li className="">
      <Link href={props.href}>
        <button className="w-full">
          <p className="w-[150px] text-black rounded-2xl flex items-center px-4 py-2 font-medium text-xl">
            {props.title}
          </p>
        </button>
      </Link>
    </li>
  );
}

function CloseIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

const MenuItem = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/products",
    title: "Product",
  },
  {
    href: "/best",
    title: "Best",
  },
  {
    href: "/store",
    title: "Store",
  },
  {
    href: "/about",
    title: "About",
  },
];
