import Head from "next/head";
import Header from "../Components/Header";
import SubSearchBar from "../Components/SubSearchBar";
import SideBar from "../Components/SideBar";
import Hero from "../Components/Hero";

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
