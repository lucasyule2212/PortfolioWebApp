import RoundedUserImage from '@/components/RoundedUserImage';
import { useGuestUser } from '@/store/GuestUser';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const GuestProfile: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const { guestUser } = useGuestUser();
  const fastTransition = {
    type: 'tween',
    duration: 0.2, // Adjust the duration as needed
  };

  const slowTransition = {
    type: 'tween',
    duration: 0.2, // Adjust the duration as needed
  };

  const slideTopVariants = {
    initial: { y: '0%' },
    hover: { y: '-50%' },
  };

  const slideBottomVariants = {
    initial: { y: '50%' },
    hover: { y: '0%' },
  };

  return (
    <div
      className={`flex w-fit min-w-[50%] hover:bg-[#4e5058]/60  rounded-sm py-1 hover:cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="relative">
        <RoundedUserImage isGuest />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 rounded-full border-[3px] border-discord-gray-5"></div>
      </div>
      <div className="flex flex-col justify-center ml-2">
        <span className="text-xs text-primary font-semibold whitespace-nowrap truncate w-[100px]">
          {guestUser.name}
        </span>
        <motion.span
          className="text-[0.7rem] text-discord-gray-0"
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
          variants={slideTopVariants}
          transition={fastTransition}
        >
          {isHovered ? '' : t('channelsFooter_online')}
        </motion.span>
        {isHovered && (
          <motion.span
            className="text-[0.7rem] text-discord-gray-0"
            initial="initial"
            animate="hover"
            variants={slideBottomVariants}
            transition={slowTransition}
          >
            {guestUser.username}
          </motion.span>
        )}
      </div>
    </div>
  );
};

export default GuestProfile;
