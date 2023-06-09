'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { BiHash } from 'react-icons/bi';
import { ExternalLink } from 'lucide-react';
// import { Container } from './styles';
type TextChannelButtonProps = {
  title: string;
};

const TextChannelButton: React.FC<TextChannelButtonProps> = ({ title }: TextChannelButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      className="flex px-2 bg-transparent hover:bg-discord-gray-2 w-full py-0 justify-start items-center h-8  gap-2 rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BiHash className="text-discord-gray-0" size={20} />
      <span className={`${isHovered ? 'text-gray-400' : 'text-discord-gray-0'}`}>{title}</span>

      <ExternalLink className={`${isHovered ? 'text-gray-400' : 'text-discord-gray-0'} ml-auto h-4 w-4`} />
    </Button>
  );
};

export default TextChannelButton;
