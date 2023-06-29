import ChannelUserSidebarUserCard from '@/components/ChannelUserSidebarUserCard';
import React from 'react';

// import { Container } from './styles';

const ChanelUsersSidebar: React.FC = () => {
  return (
    <div className=" bg-discord-gray-4 pt-6 px-4 flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-discord-gray-0 text-xs">DISPONÍVEL - </span>
        <span className="text-discord-gray-0 text-xs">2</span>
      </div>
      <ChannelUserSidebarUserCard label="Lucas Yule" isServerOwner={true} />
    </div>
  );
};

export default ChanelUsersSidebar;
