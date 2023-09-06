'use client';
import React, { useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { BiHash } from 'react-icons/bi';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/router';
// import { Container } from './styles';
type TextChannelButtonProps = {
  title: string;
  handleClick: (route: string) => void;
  route: string;
};

const TextChannelButton: React.FC<TextChannelButtonProps> = ({ title, handleClick, route }: TextChannelButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const isSelected = useMemo(() => {
    return router.pathname === route;
  }, [route, router.pathname]);
  return (
    <Button
      className="flex px-2 bg-transparent hover:bg-discord-gray-2 w-full py-0 justify-start items-center h-8  gap-2 rounded-sm data-[selected=true]:bg-discord-gray-1"
      data-selected={isSelected}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleClick(route)}
    >
      <BiHash className="text-discord-gray-0" size={20} />
      <span
        className={`${
          isHovered ? 'text-gray-400' : 'text-discord-gray-0'
        } font-semibold overflow-hidden whitespace-nowrap max-w-xs data-[selected=true]:text-primary`}
        data-selected={isSelected}
      >
        {title}
      </span>

      <ExternalLink className={`${isHovered ? 'text-gray-400' : 'text-discord-gray-0'} ml-auto h-4 w-4`} />
    </Button>
  );
};

export default TextChannelButton;
