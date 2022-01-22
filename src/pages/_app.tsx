import '../styles/reset.scss'
import '../styles/globals.scss'
// import '../styles/variables.scss'
import type { AppProps } from 'next/app'
import VhSetProperty from '~/components/Script/VhScript'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <VhSetProperty />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
