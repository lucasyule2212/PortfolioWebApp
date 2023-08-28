import { IconType } from 'react-icons/lib';
// eslint-disable-next-line import/no-anonymous-default-export
import { FaUserCircle } from 'react-icons/fa';

const clientRoutes: {
  [key: string]: {
    title: string;
    description: string;
    titlePanel?: string;
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
    titlePanel: 'Início',
  },
  '/about': {
    title: 'Sobre mim | Lucas Yule | Portfolio Web App ',
    description: 'Neste canal você pode conhecer um pouco mais sobre mim! 😄',
    titlePanel: 'Sobre mim',
    icon: FaUserCircle,
  },
};

export default clientRoutes;
