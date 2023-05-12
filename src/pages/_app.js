import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const monsterrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monsterrat',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${monsterrat.variable} font-monsterrat bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
