import Header from "./Components/Header";

export default function Best({ showSideBar, setShowSideBar }) {
  return (
    <div>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="min-h-screen flex justify-center items-centersss">
        This is best seller page
      </div>
    </div>
  );
}
