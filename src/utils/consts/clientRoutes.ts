import { IconType } from 'react-icons/lib';
// eslint-disable-next-line import/no-anonymous-default-export
import { FaUserCircle } from 'react-icons/fa';

const clientRoutes: {
  [key: string]: {
    title: {
      pt: string;
      en: string;
    };
    description: string;
    titlePanel: string;
    icon?: IconType;
  };
} = {
  '/': {
    title: {
      pt: 'Lucas Yule | Onboarding',
      en: 'Lucas Yule | Onboarding',
    },
    description: 'Portfolio Web Application of Lucas Yule built with Next.js and TypeScript',
    titlePanel: 'Onboarding',
  },
  '/home': {
    title: {
      pt: 'Lucas Yule | Portfolio Web App',
      en: 'Lucas Yule | Portfolio Web App',
    },
    description: 'Portfolio Web Application of Lucas Yule built with Next.js and TypeScript',
    titlePanel: 'channel_title_home',
  },
  '/about': {
    title: {
      pt: 'Sobre mim | Lucas Yule | Portfolio Web App ',
      en: 'About me | Lucas Yule | Portfolio Web App ',
    },
    description: 'channel_description_about_me',
    titlePanel: 'channel_title_about_me',
    icon: FaUserCircle,
  },
};

export default clientRoutes;
