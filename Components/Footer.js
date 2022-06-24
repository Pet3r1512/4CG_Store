import Link from "next/link";
import { Facebook, Instagram, Twitter, Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex items-center py-4 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-3">
          <div className="sm:flex sm:items-center sm:gap-x-2 hidden font-semibold sm:text-sm">
            <Link href="./about">
              <a href="">About 4CG</a>
            </Link>
            <Link href="./policy">
              <a href="">Return Policy</a>
            </Link>
          </div>
          <div className="flex gap-x-1 justify-center items-center w-screen sm:w-full">
            <Copyright></Copyright>
            <p className="font-semibold sm:text-sm">
              2022 4CG, LLC. All Rights Reserved.
            </p>
          </div>
          <div className="h-full sm:flex sm:items-center sm:gap-x-2 sm:justify-end hidden font-semibold">
            <Link href="#" passHref>
              <Facebook />
            </Link>
            <Link href="#" passHref>
              <Instagram />
            </Link>
            <Link href="#" passHref>
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
