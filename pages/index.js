/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../Components/Header";
import SubSearchBar from "../Components/SubSearchBar";
import SideBar from "../Components/SideBar";
import Hero from "../Components/Hero";
import { useState } from "react";

export default function Home({ showSideBar, setShowSideBar }) {
  // const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full overflow-x-hidden">
      <Tab />
      <div className="transition duration-100 ease-linear">
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
      <div className="font-Poppins w-screen">
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SubSearchBar />
      </div>
      <Hero />
    </div>
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
