import { AppProps } from "next/app";
import { Suspense } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<>loading...</>}>
      <Component {...pageProps} />
    </Suspense>
  );
}

export default MyApp;
