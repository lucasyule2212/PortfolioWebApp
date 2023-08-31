'use client';

import IntroContainer from '@/layouts/IntroContainer';
import Lottie from 'lottie-react';
import { useState, useEffect, useMemo } from 'react';
import discordLoadingAnimationJson from '../../public/assets/animations/discordLoading.json';
import { motion } from 'framer-motion';
import { StepProvider } from '@/contexts/StepperContext';
import { Stepper } from '@/components/StepperIntro';
import { FaFlagCheckered, FaLanguage, FaUserCircle } from 'react-icons/fa';
import SelectLanguageChildren from '@/components/StepperIntro/SelectLanguageChildren';
import { useGuestUser } from '@/store/GuestUser';
import UserFormChildren from '@/components/StepperIntro/UserFormChildren';
import ReadyToGoChildren from '@/components/StepperIntro/ReadyToGoChildren';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { name, username, email, language } = useGuestUser(state => state.guestUser);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const steps = useMemo(
    () => [
      {
        icon: FaLanguage,
        children: <SelectLanguageChildren />,
        allowNext: language !== '',
      },
      {
        icon: FaUserCircle,
        children: <UserFormChildren />,
        allowNext: name !== '' && username !== '' && email !== '',
      },
      {
        icon: FaFlagCheckered,
        children: <ReadyToGoChildren />,
      },
    ],
    [email, language, name, username]
  );
  return (
    <IntroContainer>
      {isLoading ? (
        <Lottie
          animationData={discordLoadingAnimationJson}
          style={{
            width: 150,
            height: 150,
          }}
        />
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
            <Stepper setIsLoading={setIsLoading} steps={steps} />
          </StepProvider>
        </motion.div>
      )}
    </IntroContainer>
  );
};

export default Index;
