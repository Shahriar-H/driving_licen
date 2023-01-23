import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
      </Head>
      <Component {...pageProps} />
  </>
}
