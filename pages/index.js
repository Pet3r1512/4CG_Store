/* eslint-disable @next/next/no-img-element */
import react from "react";
import Head from "next/head";
import Header from "../Components/Header";
import SubSearchBar from "../Components/SubSearchBar";
import SideBar from "../Components/SideBar";
import Hero from "../Components/Hero";
export const SideBarContext = react.createContext();

export default function Home() {
  const [showSideBar, setShowSideBar] = react.useState(false);
  const sideBar = {
    show_side_bar: [showSideBar, setShowSideBar],
  };
  return (
    <SideBarContext.Provider value={sideBar}>
      <div
        className="w-full h-full bg-cover fixed"
        style={{ backgroundImage: `url("images/img1.png")` }}
      >
        <Tab />
        <div className="transition duration-100 ease-linear">
          <SideBar />
        </div>
        <div className="font-Poppins w-screen">
          <Header />
          <SubSearchBar />
        </div>
        <Hero />
      </div>
    </SideBarContext.Provider>
  );
}

function Tab() {
  return (
    <Head>
      <title>4CG Store</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
