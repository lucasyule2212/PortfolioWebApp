import { useGuestUser } from '@/store/GuestUser';
import { useLottie } from 'lottie-react';
import React, { useMemo } from 'react';

// import { Container } from './styles';

type LanguageCardProps = {
  flag: unknown;
  language: string;
  handleClick: () => void;
};

const LanguageCard: React.FC<LanguageCardProps> = ({ flag, handleClick, language }) => {
  const { language: selectedLanguage } = useGuestUser(state => state.guestUser);
  const animationObj = useLottie(
    {
      animationData: flag,
      loop: true,
      autoplay: true,
    },
    {
      width: 150,
      height: 150,
    }
  );

  const isActive = useMemo(() => {
    return selectedLanguage === language;
  }, [language, selectedLanguage]);

  const languageMapping: {
    [key: string]: string;
  } = {
    pt: 'PT-BR',
    en: 'EN-US',
  };

  return (
    <div
      className="flex flex-col items-center gap-10 p-4 bg-discord-gray-4 shadow-lg  rounded-lg h-[300px] w-[200px] hover:scale-110 hover:cursor-pointer transition-transform duration-300 data-[active=true]:border-2 data-[active=true]:border-discord-green-1
      "
      data-active={isActive}
      onClick={handleClick}
    >
      <div>{animationObj.View}</div>
      <h3 className="font-semibold text-primary text-2xl">{languageMapping[language]}</h3>
    </div>
  );
};

export default LanguageCard;
