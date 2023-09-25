import { AuthProvider } from '@/contexts/AuthContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useGuestUser } from '@/store/GuestUser';
import { useEffect } from 'react';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentLanguage = useGuestUser(state => state.guestUser.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (currentLanguage !== '') {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default appWithI18Next(MyApp, ni18nConfig);
