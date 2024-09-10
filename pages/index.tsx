import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../src/common/main';

export default function componentName() {
  return (
    <>
      <Head>
        <title>Bam Pun</title>
        <link rel="icon" href="/book.png" />
      </Head>

      <Main />
    </>
  );
}
