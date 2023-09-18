import { IconType } from 'react-icons/lib';
// eslint-disable-next-line import/no-anonymous-default-export
import { FaReact, FaSuitcase, FaUserCircle } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { GiTechnoHeart } from 'react-icons/gi';

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
  '/tech_skills': {
    title: {
      pt: 'Habilidades Técnicas | Lucas Yule | Portfolio Web App ',
      en: 'Tech Skills | Lucas Yule | Portfolio Web App ',
    },
    description: 'channel_description_tech_skills',
    titlePanel: 'channel_title_tech_skills',
    icon: GiTechnoHeart,
  },
  '/professional_experience': {
    title: {
      pt: 'Experiência Profissional | Lucas Yule | Portfolio Web App ',
      en: 'Professional Experience | Lucas Yule | Portfolio Web App ',
    },
    description: 'channel_description_professional_xp',
    titlePanel: 'channel_title_professional_xp',
    icon: FaSuitcase,
  },
  '/projects': {
    title: {
      pt: 'Projetos | Lucas Yule | Portfolio Web App ',
      en: 'Projects | Lucas Yule | Portfolio Web App ',
    },
    description: 'channel_description_personal_projects',
    titlePanel: 'channel_title_personal_projects',
    icon: FaReact,
  },
  '/setup': {
    title: {
      pt: 'Setup | Lucas Yule | Portfolio Web App ',
      en: 'Setup | Lucas Yule | Portfolio Web App ',
    },
    description: 'channel_description_coding_config',
    titlePanel: 'channel_title_coding_config',
    icon: BsFillGearFill,
  },
};

export default clientRoutes;
