<<<<<<< HEAD
import Link from "next/link";

export default function Menu() {
  const MenuList = MenuItem.map((item) => {
    return <MenuLink key={item.title} href={item.href} title={item.title} />;
  });
  return (
    <div className="hidden sm:block">
      <ul className="flex gap-x-5">{MenuList}</ul>
    </div>
  );
}

function MenuLink(props) {
  return (
    <li>
      <Link href={props.href}>
        <a href={props.href}>
          <p className="font-medium text-lg text-[#6c757d] hover:text-[#fca311] transition duration-75 ease-linear">
            {props.title}{" "}
          </p>
        </a>
      </Link>
    </li>
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
=======
import Link from "next/link";

export default function Menu() {
  const MenuList = MenuItem.map((item) => {
    return <MenuLink key={item.title} href={item.href} title={item.title} />;
  });
  return (
    <div className="hidden sm:block">
      <ul className="flex gap-x-5">{MenuList}</ul>
    </div>
  );
}

function MenuLink(props) {
  return (
    <li>
      <Link href={props.href}>
        <a href={props.href}>
          <p className="font-medium text-lg text-[#6c757d] hover:text-[#fca311] transition duration-75 ease-linear">
            {props.title}{" "}
          </p>
        </a>
      </Link>
    </li>
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
>>>>>>> 68c55083e95b9861c8d712f538062d2ba706d099