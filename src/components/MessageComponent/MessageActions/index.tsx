'use client';
import { Button } from '@/components/ui/button';
import Picker from '@emoji-mart/react';
import { init } from 'emoji-mart';
import React, { useRef, useState } from 'react';
import { MdAddReaction } from 'react-icons/md';
import data from '@emoji-mart/data/sets/14/twitter.json';
import { Emoji } from '@emoji-mart/data';
import { useOutsideClick } from '@/hooks/useOutsideClick';
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
  const pickerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(pickerRef, () => {
    setIsOpened(false);
    setIsHovered(false);
    setIsMessageHoverBlocked(false);
  });

  return (
    <span ref={pickerRef}>
      {isOpened && (
        <div className="absolute bottom-20 right-4 z-10">
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
    </span>
  );
};

export default MessageActions;
