import { useLottie } from 'lottie-react';
import React from 'react';

// import { Container } from './styles';

type LanguageCardProps = {
  flag: unknown;
  language: string;
  handleClick: () => void;
};

const LanguageCard: React.FC<LanguageCardProps> = ({ flag, handleClick, language }) => {
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
  return (
    <div
      className="flex flex-col items-center gap-10 p-4 bg-discord-gray-4 shadow-lg  rounded-lg h-[300px] w-[200px] hover:scale-110 hover:cursor-pointer transition-all duration-300"
      onClick={handleClick}
    >
      <div>{animationObj.View}</div>
      <h3 className="font-semibold text-primary text-2xl">{language}</h3>
    </div>
  );
};

export default LanguageCard;
