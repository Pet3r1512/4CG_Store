import Head from "next/head";
import Header from "./Components/Header";
import SubSearchBar from "./Components/SubSearchBar";

export default function Home() {
  return (
    <>
      <Tab />
      <div className="font-Poppins w-screen">
        <Header />
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
