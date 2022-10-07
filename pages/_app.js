import "../styles/globals.css";
import Gtag from "../components/gtag";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Gtag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
