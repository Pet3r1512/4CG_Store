import Link from "next/link";

export default function Auth() {
  const AuthList = AuthIcon.map((item) => {
    return (
      <Link href={item.href} key={item.key}>
        {item.icon}
      </Link>
    );
  });
  return <div className="flex gap-x-2 items-center">{AuthList}</div>;
}

const AuthIcon = [
  {
    key: "cart",
    icon: (
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    href: "/cart",
  },
];
