'use client';
import { Button } from '@/components/ui/button';
import Picker from '@emoji-mart/react';
import { init } from 'emoji-mart';
import React, { useState } from 'react';
import { MdAddReaction } from 'react-icons/md';
import data from '@emoji-mart/data/sets/14/twitter.json';
import { Emoji } from '@emoji-mart/data';
init({ data });

// import { Container } from './styles';
interface MessageActionsProps {
  setIsMessageHoverBlocked: React.Dispatch<React.SetStateAction<boolean>>;
  isMessageHoverBlocked: boolean;
  handleAddReaction: (emoji: Emoji) => void;
}

const MessageActions: React.FC<MessageActionsProps> = ({
  setIsMessageHoverBlocked,
  isMessageHoverBlocked,
  handleAddReaction,
}: MessageActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened && (
        <div className="absolute bottom-20 right-4">
          <Picker data={data} onEmojiSelect={handleAddReaction} set="twitter" emojiButtonRadius="6px" />
        </div>
      )}
      <Button
        variant="outline"
        className="bg-discord-gray-2 border-discord-gray-4 rounded-md absolute -top-5 right-5 border-2 p-2 hover:bg-discord-gray-2"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(isMessageHoverBlocked ? true : false)}
        onClick={() => {
          setIsOpened(!isOpened);
          setIsHovered(true);
          setIsMessageHoverBlocked(!isMessageHoverBlocked);
        }}
      >
        <MdAddReaction
          data-hovered={isHovered}
          className="fill-zinc-400
       data-[hovered=true]:fill-zinc-300"
          size={25}
        />
      </Button>
    </>
  );
};

export default MessageActions;
