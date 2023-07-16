import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './style.css';

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5396QLYZJ2" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5396QLYZJ2');
        `}
      </Script>
      
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;