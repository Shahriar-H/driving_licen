
import Home from './pages/Home';

import Fotter from './Components/Footer';

import { useEffect } from 'react';
import Head from 'next/head';

function App({Data,Data1,Dataseo,DataRiveo,DataRImages}) {
  useEffect(() => {
    console.log(Dataseo?.result[0]?.title);
  }, []);
  return (
    <div>
      <Head>
        <title>{Dataseo?.result[0]?.title}</title>
        <meta name="description" content={Dataseo?.result[0]?.description} />
        <meta name="author" content={Dataseo?.result[0]?.author} />
        <meta name="keywords" content={Dataseo?.result[0]?.keywords} />
      </Head>
     <Home Data={Data} faq={Data1} reviews={DataRiveo} images={DataRImages}/>
     <Fotter/>
    </div>
  );
}

export const getServerSideProps= async ()=>{
    try {
      const response = await fetch(process.env.API_URL + "reasons");
      const Data = await response.json();
      // console.log(Data);

      const response1 = await fetch(process.env.API_URL + "faq");
      const Data1 = await response1.json();
      // console.log(Data1);

      const responseseo = await fetch(process.env.API_URL + "seo");
      const Dataseo = await responseseo.json();
      // console.log(Data1);
      
      const responseReview = await fetch(process.env.API_URL + "reviews");
      const DataRiveo = await responseReview.json();
      // console.log(Data1);
      const responseImages = await fetch(process.env.API_URL + "frontimages");
      const DataRImages = await responseImages.json();
      // console.log(Data1);

      return { props: { Data, Data1,Dataseo,DataRiveo,DataRImages } };
    } catch (error) {
        console.log(error);
        return { props: { error } };
    }
  
}

export default App;
