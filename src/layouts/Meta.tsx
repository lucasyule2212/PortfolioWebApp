import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';
import { useMemo } from 'react';

import clientRoutes from '@/utils/consts/clientRoutes';
import { useTranslation } from 'react-i18next';

const Meta = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const pageProps = useMemo(() => {
    return (
      clientRoutes[router.pathname] || {
        title: {
          pt: '404',
          en: '404',
        },
        description: '404',
      }
    );
  }, [router.pathname]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={pageProps.title[i18n.language as 'pt' | 'en']}
        description={pageProps.description}
        openGraph={{
          title: pageProps.title[i18n.language as 'pt' | 'en'],
          description: pageProps.description,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};
export default Meta;
