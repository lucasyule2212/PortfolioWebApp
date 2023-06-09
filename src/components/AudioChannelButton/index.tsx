'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Volume2 } from 'lucide-react';
// import { Container } from './styles';
type AudioChannelButtonProps = {
  title: string;
};

const AudioChannelButton: React.FC<AudioChannelButtonProps> = ({ title }: AudioChannelButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      className="flex px-2 bg-transparent hover:bg-discord-gray-2 w-full py-0 justify-start items-center h-8  gap-2 rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Volume2 className="text-discord-gray-0  h-5 w-5" />
      <span className={`${isHovered ? 'text-gray-400' : 'text-discord-gray-0'}`}>{title}</span>
    </Button>
  );
};

export default AudioChannelButton;
