import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './style.css';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-5396QLYZJ2"></script>
<script>
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5396QLYZJ2');
`}
</script>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;