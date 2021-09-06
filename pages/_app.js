import Head from 'next/head';
import MainLoading from '../components/MainLoading';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../css/style.css';
import '../css/skin/skin-3.css';
import '../styles/switcher.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JAMA Administraciones</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon.png'
        />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='Administramos edificios y condominios'
        />
      </Head>
      <div className='page-wraper'>
        <Component {...pageProps} />
        <MainLoading />
      </div>
    </>
  );
}

export default MyApp;
