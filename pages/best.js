import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

export default function Best() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  return (
    <>
      <SideBar />
      <div>
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="min-h-screen flex justify-center items-centersss">
          This is best seller page
        </div>
      </div>
    </>
  );
}
