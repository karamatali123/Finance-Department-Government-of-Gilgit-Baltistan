import Head from "next/head";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finance Department Gilgit Baltistan</title>
        <meta
          name="description"
          content="Finance Department of Gilgit Baltistan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
