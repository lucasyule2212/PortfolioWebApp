import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

// import { Container } from './styles';
type LanguageSwapButtonProps = {
  src: string;
  alt: string;
};

const LanguageSwapButton: React.FC<LanguageSwapButtonProps> = ({ src, alt }) => {
  const { i18n, t } = useTranslation();
  const languageMap: {
    [key: string]: string;
  } = useMemo(
    () => ({
      br: 'pt',
      usa: 'en',
    }),
    []
  );

  const handleClick = useCallback(() => {
    const country = src.split('-')[0] || 'br';
    i18n.changeLanguage(languageMap[country]);
  }, [i18n, languageMap, src]);

  const tooltipMessage = useMemo(() => {
    const country = src.split('-')[0] || 'br';
    return country === 'br' ? t('portuguese') : t('english');
  }, [src, t]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="flex items-center gap-2 cursor-pointer
      hover:transform hover:scale-110 transition-all
      duration-200 ease-in-out rounded-lg
      "
            onClick={handleClick}
          >
            <Image src={`/assets/images/${src}`} width={25} height={25} alt={alt} />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-discord-gray-5 border border-discord-gray-7">
          <span className="text-xs text-discord-gray-0">{tooltipMessage}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LanguageSwapButton;
