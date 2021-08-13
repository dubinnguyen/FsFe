import '../styles/globals.css'
import Layout from '../components/Layout';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>Flowstarter.app</title>
    <link rel="icon" type="image/png" href="favicon.ico" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css" />
    </Head>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
