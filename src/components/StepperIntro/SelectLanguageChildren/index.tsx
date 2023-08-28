import React from 'react';
import LanguageCard from './LanguageCard';
import BrazilFlagAnimation from '../../../../public/assets/animations/brazil_flag.json';
import UsaFlagAnimation from '../../../../public/assets/animations/usa_flag.json';

// import { Container } from './styles';

const SelectLanguageChildren: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full gap-28">
      <LanguageCard
        flag={BrazilFlagAnimation}
        language="PT-BR"
        handleClick={() => {
          console.log('Clicked');
        }}
      />
      <LanguageCard
        flag={UsaFlagAnimation}
        language="EN-US"
        handleClick={() => {
          console.log('Clicked');
        }}
      />
    </div>
  );
};

export default SelectLanguageChildren;
