import ServerButton from '@/components/ServerButton';
import React, { useState } from 'react';

// import { Container } from './styles';

const SidebarServers: React.FC = () => {
  const [selectedServer, setSelectedServer] = useState<string>('yuleHeadSmile.png');

  const handleServerSelect = (serverName: string) => {
    setSelectedServer(serverName);
  };

  return (
    <div className="flex flex-col w-18 bg-discord-gray-6 p-2 pl-0 items-center gap-2">
      <ServerButton
        src="yuleHeadSmile.png"
        alt="sticker yule smile"
        isTopHeader
        isSelected={selectedServer === 'yuleHeadSmile.png'}
        onSelect={() => handleServerSelect('yuleHeadSmile.png')}
      />
      {/* customized divider */}
      <div className="w-8 h-[2px] bg-discord-gray-3 rounded-md ml-2"></div>
      <ServerButton
        text="LY"
        alt="logo yule"
        isSelected={selectedServer === 'LY'}
        onSelect={() => handleServerSelect('LY')}
      />
    </div>
  );
};

export default SidebarServers;
