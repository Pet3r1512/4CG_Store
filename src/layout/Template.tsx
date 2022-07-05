import { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Header from "./Header";
import SubSearchBar from "./SubSearchBar";
import Footer from "./Footer";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <SideBar />
      <NavBar>
        <Header />
        <SideBar />
        <SubSearchBar />
      </NavBar>
      {children}
      <Footer />
    </>
  );
}
