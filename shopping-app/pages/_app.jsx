/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import App from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';

// import your default seo configuration
import SEO from '../config/seo.config';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...SEO} />
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
  }
}
