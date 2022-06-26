import Head from "next/head";
import Header from "../src/layout/Header";
import SubSearchBar from "../src/layout/SubSearchBar";
import SideBar from "../src/layout/SideBar";
import Hero from "../src/storeInfo/Hero";

function Tab() {
  return (
    <Head>
      <title>4CG Store</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover fixed"
      style={{ backgroundImage: `url("images/img1.png")` }}
    >
      <Tab />
      <div className="transition duration-100 ease-linear">
        <SideBar />
      </div>
      <div>
        <Header />
        <SubSearchBar />
      </div>
      <Hero />
    </div>
  );
}
