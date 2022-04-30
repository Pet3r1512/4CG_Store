import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Component
      {...pageProps}
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
    />
  );
}

export default MyApp;
