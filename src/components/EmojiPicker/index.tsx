/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import data from '@emoji-mart/data/sets/14/twitter.json';
import Picker from '@emoji-mart/react';
import { init } from 'emoji-mart';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
init({ data });
// import { Container } from './styles';

const EmojiPickerComponent: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const getRandomEmoji = useCallback(() => {
    const emojis = data.categories[1]?.emojis.slice(0, 20) || [];

    const randomIndex = Math.floor(Math.random() * emojis.length);

    const emoji = emojis[randomIndex] || emojis[0];

    return emoji;
  }, []);

  const [randomEmoji, setRandomEmoji] = useState(getRandomEmoji());

  useEffect(() => {
    if (isHovered) {
      setRandomEmoji(getRandomEmoji());
    }
  }, [isHovered, getRandomEmoji]);

  return (
    <>
      <motion.div
        data-active={isOpened}
        className="hover:cursor-pointer hover:grayscale-0 grayscale data-[active=true]:grayscale-0 z-30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpened(!isOpened)}
        transition={{ duration: 0.1, ease: 'easeInOut', bounce: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
      >
        {/* @ts-ignore */}
        <em-emoji id={randomEmoji} size="1.8rem" set="twitter" />
      </motion.div>
      {isOpened && (
        <div className="absolute bottom-20 right-4">
          <Picker data={data} onEmojiSelect={console.log} set="twitter" emojiButtonRadius="6px" />
        </div>
      )}
    </>
  );
};

export default EmojiPickerComponent;
