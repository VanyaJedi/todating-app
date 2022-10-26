import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { authService } from '../modules';

import '../global.scss';
import '../app.less';

function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    authService.getProfile().then((value) => {
      console.log(value);
    }).catch((err) => {
      router.push('/auth');
    })
  }, [])

  return (
    <>
      <Head>
        <title>Welcome to todating-app-web!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
