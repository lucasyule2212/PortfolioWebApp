// eslint-disable-next-line import/no-anonymous-default-export

const clientRoutes: {
  [key: string]: {
    title: string;
    description: string;
    titlePanel?: string;
  };
} = {
  '/': {
    title: 'Lucas Yule | Portfolio Web App',
    description: 'Portfolio Web Application of Lucas Yule built with Next.js and TypeScript',
    titlePanel: 'Início',
  },
  '/inicio': {
    title: 'Lucas Yule | Portfolio Web App | Início',
    description: 'Portfolio Web Application of Lucas Yule built with Next.js and TypeScript',
    titlePanel: 'Início',
  },
};

export default clientRoutes;
