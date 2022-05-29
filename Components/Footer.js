import Link from "next/link";
import { Facebook, Instagram, Twitter, Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex items-center py-4 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 col-auto">
          <div className="sm:flex sm:gap-x-3 hidden">
            <Link href="./about">
              <a href="">About 4CG</a>
            </Link>
            <Link href="">
              <a href="">Return Policy</a>
            </Link>
          </div>
          <div className="flex gap-x-1 justify-center">
            <Copyright></Copyright>
            <p>2022 4CG, LLC. All Rights Reserved.</p>
          </div>
          <div className="sm:flex sm:gap-x-3 sm:justify-end hidden">
            <Link href="">
              <a href="">Contact us</a>
            </Link>
            <Link href="">
              <Facebook></Facebook>
            </Link>
            <Link href="">
              <Instagram></Instagram>
            </Link>
            <Link href="">
              <Twitter></Twitter>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
