import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
// import { Container } from './styles';

type ServerButtonProps = {
  src?: string;
  text?: string;
  bgColor?: string;
  alt: string;
  isTopHeader?: boolean;
};

const ServerButton: React.FC<ServerButtonProps> = ({ src, text, alt, isTopHeader }: ServerButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const variants = useMemo(
    () => ({
      default: {
        height: 0,
      },
      hover: {
        height: isSelected ? '80%' : '40%',
        backgroundColor: '#fafafa',
        transition: {
          duration: 0.2,
        },
      },
      selected: {
        height: '80%',
        backgroundColor: '#fafafa',
        transition: {
          duration: 0.1,
        },
      },
    }),
    [isSelected]
  );

  return (
    <div className={`flex items-center ${isTopHeader ? 'mt-1' : ''}`}>
      <motion.div
        className={`w-1 rounded-r-lg mr-1 ${isSelected ? 'bg-white' : ''}`}
        variants={variants}
        initial="default"
        animate={isHovered ? 'hover' : isSelected ? 'selected' : 'default'}
        transition={{ duration: 0.2 }}
      />

      <button
        className={`flex items-center justify-center w-12 h-12 rounded-full  bg-discord-gray-3 text-white transition-all duration-200 ${
          isHovered || isSelected ? 'rounded-2xl hover:bg-discord-blue' : ''
        }`}
        style={{
          borderRadius: isHovered ? '1rem' : '100%',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsSelected(!isSelected)}
      >
        {src && (
          <Image
            className={`flex items-center justify-center w-12 h-12 rounded-full  bg-discord-gray-3 text-white transition-all duration-200 ${
              isHovered ? 'rounded-2xl hover:bg-discord-blue' : ''
            }`}
            style={{
              borderRadius: isHovered ? '1rem' : '100%',
            }}
            src={`/assets/images/${src}`}
            alt={alt}
            width={500}
            height={500}
          />
        )}
        {text && <p className="text-white font-semibold">{text}</p>}
      </button>
    </div>
  );
};

export default ServerButton;
