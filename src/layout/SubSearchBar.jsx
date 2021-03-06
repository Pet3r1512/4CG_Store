import { useState } from "react";
import ProductsList from "../products/ProductsList";

export default function SubSearchBar() {
  const [input, setInput] = useState("");

  const onChangeHandler = (context) => {
    const lowerCase = context.target.value.toLowerCase();
    setInput(lowerCase);
  };

  return (
    <div className="mt-5 px-4 flex justify-end lg:hidden opacity-50 hover:opacity-100">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search..."
          className="h-[35px] w-full rounded-lg pl-3 pr-8"
          onChange={onChangeHandler}
        />
        <div>
          <ProductsList input={input} />
        </div>
        <SearchIcon />
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 absolute right-[2px] top-[50%] translate-y-[-50%]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
