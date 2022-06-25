import { useState } from "react";
import ProductsList from "./ProductsList";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const onChangeHandler = (context) => {
    const lowerCase = context.target.value.toLowerCase();
    setInput(lowerCase);
  };

  return (
    <div className="hidden lg:block">
      <div className="flex items-center relative">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Search..."
            className="h-[35px] w-[350px] rounded-lg pl-3 pr-8 text-black"
            onChange={onChangeHandler}
          />
          <div className="inline-block relative">
            <ProductsList input={input} />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 absolute right-[2px] pointer-events-none"
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
      </div>
    </div>
  );
}
