import '../styles/globals.css'

import 'swiper/css'
import 'swiper/css/navigation'

import type {AppProps} from 'next/app'
import {Layout} from '@/app/components/layouts'
import cx from 'classnames'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
