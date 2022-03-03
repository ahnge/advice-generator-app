import Head from "next/head";
import MyHome from "../components/MyHome";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon-32x32.png" type="png" />
        <title>Advice Genarator</title>
      </Head>
      <MyHome />
    </>
  );
}
