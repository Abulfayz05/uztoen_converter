import "../styles/globals.css";
import Gtag from "../components/gtag";
import Adsense from "../components/adsense";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
   
 
      <Gtag />
      <Component {...pageProps} />

      <Script id="myscript">{`window.yaContextCb=window.yaContextCb||[]`}</Script>
      <Script src="https://yandex.ru/ads/system/context.js" async></Script>

      <Script
        id="R-A-1979111-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.yaContextCb.push(()=>{
            Ya.Context.AdvManager.render({
              "blockId": "R-A-1979111-2",
              "type": "fullscreen",
              "platform": "touch"
            })
          })
          `,
        }}
      />
    </>
  );
}

export default MyApp;
