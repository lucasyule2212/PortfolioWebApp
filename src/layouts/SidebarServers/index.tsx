import ServerButton from '@/components/ServerButton';
import React from 'react';

// import { Container } from './styles';

const SidebarServers: React.FC = () => {
  return (
    <div className="flex flex-col w-18 bg-discord-gray-6 p-2 pl-0 items-center gap-2">
      <ServerButton src="yuleHeadSmile.png" alt="sticker yule smile" isTopHeader />
      {/* customized divider */}
      <div className="w-8 h-[2px] bg-discord-gray-3 rounded-md ml-2"></div>
      <ServerButton text="LY" alt="logo yule" />
    </div>
  );
};

export default SidebarServers;
