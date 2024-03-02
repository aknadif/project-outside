import type {NextPage} from 'next'
import Head from 'next/head'

import HomePage from '@/app/screens/home'
// import {SEO_CONFIG} from '@/constants'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* <meta name='description' content={SEO_CONFIG.description} />
        <meta name='keywords' content={SEO_CONFIG.keywords} />
        <meta property='og:title' content={SEO_CONFIG.title} />
        <meta property='og:description' content={SEO_CONFIG.description} />
        <meta property='og:image' itemProp='image' content={SEO_CONFIG.image} />
        <meta property='og:url' content={SEO_CONFIG.site_url} /> */}
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='600' />
        <meta property='og:type' content='article' />
        <meta property='og:image:height' content='315' />
        {/* <meta property='og:site_name' content={SEO_CONFIG.site_name} /> */}
      </Head>
      <HomePage />
    </>
  )
}

export default Home
