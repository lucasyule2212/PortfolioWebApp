'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { MdAddReaction } from 'react-icons/md';

// import { Container } from './styles';

const MessageActions: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      variant="outline"
      className="bg-discord-gray-2 border-discord-gray-4 rounded-md absolute -top-5 right-5 border-2 p-2 hover:bg-discord-gray-2"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MdAddReaction
        data-hovered={isHovered}
        className="fill-zinc-400
       data-[hovered=true]:fill-zinc-300"
        size={25}
      />
    </Button>
  );
};

export default MessageActions;
