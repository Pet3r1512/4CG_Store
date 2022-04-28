<<<<<<< HEAD
import Menu from "./Menu";
import Auth from "./Auth";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto mt-5 flex justify-between items-center relative px-3 sm:px-4 lg:px-0">
      <div className="flex justify-between items-center gap-x-14">
        <div className="w-full sm:hidden">{hamburgerIcon}</div>
        <h1 className="text-3xl font-bold cursor-pointer hidden sm:block">
          4CG
        </h1>
        <h1 className="text-3xl font-bold cursor-pointer absolute sm:hidden left-[50%] translate-x-[-50%]">
          4CG
        </h1>
        <Menu />
      </div>
      <div className="flex items-center gap-x-5">
        <SearchBar />
        <Auth />
      </div>
    </div>
  );
}

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
=======
import Menu from "./Menu";
import Auth from "./Auth";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto mt-5 flex justify-between items-center relative px-3 sm:px-4 lg:px-0">
      <div className="flex justify-between items-center gap-x-14">
        <div className="w-full sm:hidden">{hamburgerIcon}</div>
        <h1 className="text-3xl font-bold cursor-pointer hidden sm:block">
          4CG
        </h1>
        <h1 className="text-3xl font-bold cursor-pointer absolute sm:hidden left-[50%] translate-x-[-50%]">
          4CG
        </h1>
        <Menu />
      </div>
      <div className="flex items-center gap-x-5">
        <SearchBar />
        <Auth />
      </div>
    </div>
  );
}

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
>>>>>>> 68c55083e95b9861c8d712f538062d2ba706d099
