import Link from "next/link";

export default function SideBar({ showSideBar, setShowSideBar }) {
  if (showSideBar) {
    const SideBarMenuList = MenuItem.map((item) => {
      return (
        <SideBarMenu key={item.title} href={item.href} title={item.title} />
      );
    });
    return (
      <div className="pt-5 px-3 h-screen w-[65%] bg-gray-500 absolute z-10 top-0 transition duration-100 ease-linear flex flex-col gap-y-12 rounded-r-3xl">
        <div>
          <CloseIcon
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </div>
        <div className="mr-10">
          <ul className="flex flex-col gap-y-5">{SideBarMenuList}</ul>
        </div>
        <div className="w-full text-right">
          <h1 className="text-3xl font-bold text-white cursor-pointer">4CG</h1>
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
          <p className="w-[150px] text-white rounded-2xl flex items-center px-4 py-2 font-medium text-2xl hover:text-black hover:bg-white transition duration-100 ease-linear">
            {props.title}
          </p>
        </button>
      </Link>
    </li>
  );
}

function CloseIcon({ showSideBar, setShowSideBar }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      onClick={() => setShowSideBar(!showSideBar)}
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
    href: "/product",
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
