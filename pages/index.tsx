import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../src/common/main';

export default function componentName() {
  return (
    <>
      <Head>
        <title>Personal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
