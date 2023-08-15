'use client';
import { useOutsideClick } from '@/hooks/useOutsideClick';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import data from '@emoji-mart/data/sets/14/twitter.json';
import Picker from '@emoji-mart/react';
import { init } from 'emoji-mart';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react'; // import { Container } from './styles';

interface EmojiPickerProps {
  onSelectEmojiEditor: (emoji: string) => void;
}
const EmojiPickerComponent: React.FC<EmojiPickerProps> = ({ onSelectEmojiEditor }: EmojiPickerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const getRandomEmoji = useCallback(() => {
    if (data) {
      const emojis = data.categories[1]?.emojis.slice(0, 20) || [];

      const randomIndex = Math.floor(Math.random() * emojis.length);

      const emoji = emojis[randomIndex] || emojis[0];

      return emoji;
    }
    return 'grinning';
  }, []);

  const [randomEmoji, setRandomEmoji] = useState(getRandomEmoji());

  useEffect(() => {
    if (isHovered && !isOpened) {
      setRandomEmoji(getRandomEmoji());
    }
  }, [isHovered, getRandomEmoji, isOpened]);

  useEffect(() => {
    init({ data });
  }, []);

  const handleEmojiSelect = useCallback(
    (emoji: { id: string }) => {
      onSelectEmojiEditor(emoji.id);
    },
    [onSelectEmojiEditor]
  );
  const pickerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(pickerRef, () => {
    setIsOpened(false);
    setIsHovered(false);
  });

  return (
    <>
      <motion.div
        ref={pickerRef}
        data-active={isOpened}
        className="hover:cursor-pointer hover:grayscale-0 grayscale data-[active=true]:grayscale-0 z-30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpened(!isOpened)}
        transition={{ duration: 0.1, ease: 'easeInOut', bounce: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
      >
        <div>
          {/* @ts-ignore */}
          <em-emoji id={randomEmoji} size="1.8rem" set="twitter" />
        </div>
      </motion.div>
      {isOpened && (
        <div className="absolute bottom-20 right-4">
          <Picker data={data} onEmojiSelect={handleEmojiSelect} set="twitter" emojiButtonRadius="6px" />
        </div>
      )}
    </>
  );
};

export default EmojiPickerComponent;
