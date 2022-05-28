import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";

export default function Item() {
  return (
    <>
      <SideBar />
      <div>
        <Header />
        <SubSearchBar />
      </div>
    </>
  );
}
