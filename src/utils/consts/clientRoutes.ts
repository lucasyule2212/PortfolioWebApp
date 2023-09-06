import { IconType } from 'react-icons/lib';
// eslint-disable-next-line import/no-anonymous-default-export
import { FaUserCircle } from 'react-icons/fa';

const clientRoutes: {
  [key: string]: {
    title: string;
    description: string;
    titlePanel: string;
    icon?: IconType;
  };
} = {
  '/': {
    title: 'Lucas Yule | Onboarding',
    description: 'Portfolio Web Application of Lucas Yule built with Next.js and TypeScript',
    titlePanel: 'Onboarding',
  },
  '/home': {
    title: 'Lucas Yule | Portfolio Web App',
    description: 'Portfolio Web Application of Lucas Yule built with Next.js and TypeScript',
    titlePanel: 'channel_title_home',
  },
  '/about': {
    title: 'Sobre mim | Lucas Yule | Portfolio Web App ',
    description: 'channel_description_about_me',
    titlePanel: 'channel_title_about_me',
    icon: FaUserCircle,
  },
};

export default clientRoutes;
