import Script from 'next/script'
import { GA_TRACKING_ID } from '~/libs/gtag'

export const GAurl = () => {
  return (
    <Script
      id='gaasync'
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
  )
}

export const GAScript = () => {
  return (
    <Script id='ga' strategy='afterInteractive'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${GA_TRACKING_ID}');
    `}
    </Script>
  )
}
