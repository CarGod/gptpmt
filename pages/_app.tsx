import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './style.css';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

<Script async src="https://www.googletagmanager.com/gtag/js?id=GTM-5QZ6WQB"/>
<Script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GTM-5QZ6WQB');
`}
</Script>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;