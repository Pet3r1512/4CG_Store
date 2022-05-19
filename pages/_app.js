import "../styles/tailwind.scss"
import { AppWrapper } from "../hooks/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
