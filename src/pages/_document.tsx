import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-discord-gray-4">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
