/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import App from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Navbar from '../components/nav/Navbar';
// import your default seo configuration
import SEO from '../config/seo.config';
import { GlobalProvider } from '../context/GlobalState';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...SEO} />
        <Head>
          <script src="https://kit.fontawesome.com/1d06bc2a38.js" crossOrigin="anonymous" />
        </Head>
        <GlobalProvider>
          <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
          </ChakraProvider>
        </GlobalProvider>

      </>
    );
  }
}
