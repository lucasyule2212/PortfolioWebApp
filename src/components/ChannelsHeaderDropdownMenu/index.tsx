'use client';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import ChanelsHeaderButton from './ChanelsHeaderButton';
import ChanelsHeaderMenuLabel from './ChanelsHeaderMenuLabel';
import ChanelsHeaderDropdownItem from './ChanelsHeaderDropdownItem';

// import { Container } from './styles';

const ChannelsHeaderDropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean | ((prevState: boolean) => boolean)) => {
    setIsOpen(open);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <ChanelsHeaderButton open={isOpen} onOpenChange={setIsOpen} />
      <DropdownMenuContent className="flex flex-col items-center bg-discord-gray-7 text-gray-400 border-none mt-1 text-xs w-56 p-2">
        <ChanelsHeaderMenuLabel />
        <DropdownMenuSeparator className="w-[100%] bg-discord-gray-4 h-[0.1px]" />
        <ChanelsHeaderDropdownItem title="Home" icon="Home" />
        <ChanelsHeaderDropdownItem variant="blue" title="About me" icon="User" iconIsFill />
        <DropdownMenuSeparator className="w-[100%] bg-discord-gray-4 h-[0.1px]" />
        <ChanelsHeaderDropdownItem variant="red" title="Logout" icon="LogOut" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChannelsHeaderDropdownMenu;
