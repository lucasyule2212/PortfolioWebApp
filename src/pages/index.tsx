'use client';

import IntroContainer from '@/layouts/IntroContainer';
import { useLottie } from 'lottie-react';
import { useState, useEffect } from 'react';
import discordLoadingAnimationJson from '../../public/assets/animations/discordLoading.json';
import { motion } from 'framer-motion';
import { StepProvider } from '@/contexts/StepperContext';
import { Stepper } from '@/components/StepperIntro';
import { FaFlagCheckered, FaLanguage, FaUserCircle } from 'react-icons/fa';
import SelectLanguageChildren from '@/components/StepperIntro/SelectLanguageChildren';
import { useGuestUser } from '@/store/GuestUser';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { name, username, email, language, avatarUrl } = useGuestUser(state => state.guestUser);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  const animationObj = useLottie(
    {
      animationData: discordLoadingAnimationJson,
      loop: true,
      autoplay: true,
    },
    {
      width: 150,
      height: 150,
      position: 'absolute',
    }
  );
  const steps = [
    {
      icon: FaLanguage,
      children: <SelectLanguageChildren />,
      allowNext: language !== '',
    },
    {
      icon: FaUserCircle,
      children: <h1>Teste2</h1>,
      allowNext: name !== '' && username !== '' && email !== '' && avatarUrl !== '',
    },
    {
      icon: FaFlagCheckered,
      children: <h1>Teste3</h1>,
    },
  ];
  return (
    <IntroContainer>
      {isLoading ? (
        animationObj.View
      ) : (
        <motion.div
          className="w-[50%] h-[70%] bg-discord-gray-5 rounded-3xl
           shadow-neumorphism-dark "
          initial={{
            height: '0%',
          }}
          animate={{
            height: '70%',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <StepProvider>
            <Stepper steps={steps} />
          </StepProvider>
        </motion.div>
      )}
    </IntroContainer>
  );
};

export default Index;
