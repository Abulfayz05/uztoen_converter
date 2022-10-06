import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoAlertCircle } from "react-icons/io5";
import { NextSeo } from "next-seo";

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [copy, setCopy] = useState(false);
  const [copyln, setCopyln] = useState(false);
  // ** Firstname to convert ** //
  let fntoenglish = firstname
    // .replace(/qo/gi, "ka")
    .replace(/q/gi, "k")
    .replace(/x/gi, "kh")
    .replace(/o'/gi, "u")
    .replace(/o`/gi, "u")
    .replace(/'/gi, "")
    .replace(/`/gi, "")
    .replace(/ye/gi, "e");
  // ** END Firstname to convert ** //

  // ** Lastname to convert ** //
  let lntoenglish = lastname
    // .replace(/qo/gi, "ka")
    .replace(/q/gi, "k")
    .replace(/x/gi, "kh")
    .replace(/o'/gi, "u")
    .replace(/o`/gi, "u")
    .replace(/'/gi, "")
    .replace(/`/gi, "")
    .replace(/ye/gi, "e");
  // ** END Lastname to convert ** //

  //** Capitalized string first  */
  const fncapitalized =
    fntoenglish.charAt(0).toUpperCase() + fntoenglish.slice(1);
  const lncapitalized =
    lntoenglish.charAt(0).toUpperCase() + lntoenglish.slice(1);
  return (
    <div className={styles.container}>
      <NextSeo
        title="uztoen.uz O'zbekcha ism va familyangizni ingiliz tiliga o'girib
        beruvchi sayt"
        description="O'zbekcha ism va familyangizni ingiliz tiliga o'girib
        beruvchi sayt uztoen.uz"
        titleTemplate="O'zbekcha ism va familyangizni ingiliz tiliga o'girib
        beruvchi sayt"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="#">Next.js!</a>
        </h1> */}

        <p className={styles.description}>
          O&apos;zbekcha ism va familyangizni ingiliz tiliga o&apos;girib
          beruvchi sayt
        </p>

        <div className={styles.grid}>
          <div className={styles.box}>
            <p>Ismingizni kiriting </p>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />

            <p>Familyangizni kiriting </p>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h2>Natija</h2>
          <div className={styles.section}>
            <p>Firstname / Ismingiz</p>
            <div className={styles.copybox}>
              <span className={styles.code}>{fncapitalized}</span>
              <CopyToClipboard
                text={fncapitalized}
                onCopy={() => setCopy(true)}
              >
                <button className={`${copy ? "copied" : "copy"}`}>
                  {" "}
                  {copy ? "Nusxalandi" : "Nusxalash"}
                </button>
              </CopyToClipboard>
            </div>
            <p>Lastname / Familyangiz</p>
            <div className={styles.copybox}>
              <span className={styles.code}>{lncapitalized}</span>
              <CopyToClipboard
                text={lncapitalized}
                onCopy={() => setCopyln(true)}
              >
                <button className={`${copyln ? "copied" : "copy"}`}>
                  {" "}
                  {copyln ? "Nusxalandi" : "Nusxalash"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className={styles.alert}>
          <div className={styles.alertbox}>
            <IoAlertCircle color="#ffc12e" size={35} />
            <h3>
              Tarjima jarayonida xatolikni aniqlasangiz bizga murojaat qiling :{" "}
              <a
                href="https://t.me/abulfayz05"
                target="_blank"
                rel="noopener noreferrer"
              >
                @abulfayz05
              </a>
            </h3>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://t.me/abulfayz05"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by : Abulfayz
        </a>
      </footer>
    </div>
  );
}
