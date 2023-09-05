import React from 'react';
import LanguageCard from './LanguageCard';
import BrazilFlagAnimation from '../../../../public/assets/animations/brazil_flag.json';
import UsaFlagAnimation from '../../../../public/assets/animations/usa_flag.json';
import { useGuestUser } from '@/store/GuestUser';

// import { Container } from './styles';

const SelectLanguageChildren: React.FC = () => {
  const { setLanguage } = useGuestUser();

  const handleSelectLanguage = (language: string) => {
    setLanguage(language);
  };
  return (
    <div className="flex items-center justify-center w-full h-full gap-28">
      <LanguageCard
        flag={BrazilFlagAnimation}
        language="pt"
        handleClick={() => {
          handleSelectLanguage('pt');
        }}
      />
      <LanguageCard
        flag={UsaFlagAnimation}
        language="en"
        handleClick={() => {
          handleSelectLanguage('en');
        }}
      />
    </div>
  );
};

export default SelectLanguageChildren;
