import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Header from "./Header";
import SubSearchBar from "./SubSearchBar";
import Footer from "./Footer";

export default function Template({ children }) {
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
