
import Head from "next/head";
import Settings from "./../../components/pages/settings";
export default function Einstellungen() {
  return (
    <>
      <Head>
        <title>HestiaMed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Settings />
    </>
  );
}
