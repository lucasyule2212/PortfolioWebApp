import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const DividerWithDate: React.FC = () => {
  const { i18n } = useTranslation();
  const actualDate = format(new Date(), 'dd MMMM yyyy', {
    locale: i18n.language === 'pt' ? ptBR : enUS,
  });

  return (
    <div className="flex gap-1 w-full items-center justify-center">
      <div className="w-full h-px my-8 bg-discord-gray-1 border-0 dark:bg-gray-700" />
      <span className="text-discord-gray-0 text-xs min-w-48 w-48 p-0 font-semibold whitespace-nowrap max-w-xs">
        {actualDate}
      </span>
      <div className="w-full h-px my-8 bg-discord-gray-1 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default DividerWithDate;
