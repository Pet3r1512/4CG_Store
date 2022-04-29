import Head from "next/head";
import Header from "./Components/Header";
import SubSearchBar from "./Components/SubSearchBar";
import SideBar from "./Components/SideBar";
import { useState } from "react";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <Tab />
      <div className="transition duration-100 ease-linear">
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
      <div className="font-Poppins w-screen">
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SubSearchBar />
        home
      </div>
    </>
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
