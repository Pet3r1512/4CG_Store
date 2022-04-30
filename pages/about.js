import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

export default function About({ showSideBar, setShowSideBar }) {
  return (
    <>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div>
        <Header />
        <div className="min-h-screen">About</div>
      </div>
    </>
  );
}
