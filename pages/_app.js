import "../styles/globals.css";
import Gtag from "../components/gtag";
import Adsense from "../components/adsense";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Adsense />
      <Gtag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
