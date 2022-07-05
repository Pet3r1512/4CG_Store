import { ReactNode, useEffect, useRef, useState } from "react";

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const navBarEl = useRef<HTMLDivElement>(null);
  const defaultClassList = "w-full z-10 top-0 bg-gray-600 pb-5";
  const [classList, setClassList] = useState(defaultClassList);

  useEffect(() => {
    const navbar = navBarEl.current;
    if (!navbar) {
      return;
    }
    const sticky = navbar.offsetTop;

    function stickyNav() {
      if (window.scrollY > sticky) {
        setClassList(`${defaultClassList} fixed`);
      } else {
        setClassList(defaultClassList);
      }
    }

    window.onscroll = () => {
      stickyNav();
    };
  }, []);

  return (
    <div className={classList} ref={navBarEl}>
      {children}
    </div>
  );
}
