import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '../src/common/Home';

export default function componentName() {
  return (
    <>
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Home />
      </>
    </>
  );
}
