import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';

// import { Container } from './styles';

const DividerWithDate: React.FC = () => {
  const actualDate = format(new Date(), 'dd MMMM yyyy', {
    locale: ptBR,
  });

  return (
    <div className="flex gap-1 w-full items-center justify-center">
      <div className="w-full h-px my-8 bg-discord-gray-1 border-0 dark:bg-gray-700" />
      <span className="text-discord-gray-0 text-xs min-w-48 w-48 ml-2 p-0 font-semibold">{actualDate}</span>
      <div className="w-full h-px my-8 bg-discord-gray-1 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default DividerWithDate;
