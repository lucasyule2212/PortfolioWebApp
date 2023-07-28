import React from 'react';
import RoundedUserImage from '../RoundedUserImage';
import { format } from 'date-fns';

// import { Container } from './styles';

const MessageComponent: React.FC = () => {
  return (
    <div className="flex z-20 px-4 py-1 hover:bg-discord-gray-4 w-full">
      <RoundedUserImage />
      <div className="flex flex-col ml-3">
        <div className="flex gap-2">
          <p className="font-normal text-primary text-sm">lyrma</p>
          <p className=" text-discord-gray-0 text-xs">{format(new Date(), 'dd/MM/yyyy HH:mm')}</p>
        </div>
        <p className="font-thin text-primary text-sm">isso é uma mensagem de teste</p>
      </div>
    </div>
  );
};

export default MessageComponent;
