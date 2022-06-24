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

function MenuLink({ href, title }) {
  return (
    <li>
      <Link href={href}>
        <a href={href}>
          <p className="font-medium text-lg text-white hover:text-rose-400 transition duration-75 ease-linear">
            {title}{" "}
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
