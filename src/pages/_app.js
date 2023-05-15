import '@/styles/globals.css'
import Head from 'next/head'
import Header from './Components/Header';
import islogin from '../lib/login_feature';
import { useReducer } from 'react';
import { initialState, reducer } from '../utils/state_manager';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

const useSharedState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0)
  // const [state, dispatch] = useReducer(reducer,initialState)
  const sharedState = useSharedState()
  // islogin()

  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(80)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  }, []);

  return <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
      </Head>
      <Header/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} {...sharedState} />
      <ToastContainer />
  </>
}
