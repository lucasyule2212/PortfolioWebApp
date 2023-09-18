import React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../ui/tooltip';
import { useTranslation } from 'react-i18next';
import { AiFillWarning } from 'react-icons/ai';

// import { Container } from './styles';
type DevTooltipProps = {
  children: React.ReactNode;
};

const DevTooltip: React.FC<DevTooltipProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="flex items-center gap-2 bg-discord-gray-5 border border-discord-gray-7">
          <AiFillWarning className="fill-yellow-400" />
          <span className="text-xs text-discord-gray-0 font-semibold">{t('in_development')}!</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DevTooltip;
