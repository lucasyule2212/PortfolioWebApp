'use client';

import React, { useCallback, useEffect } from 'react';
import DividerWithDate from '../DividerWithDate';
import Image from 'next/image';
import { useLottie } from 'lottie-react';
import confettiAnimationJson from '../../../public/assets/animations/confettiAnimation.json';

// import { Container } from './styles';

const MainChannelHeader: React.FC = () => {
  const animationObj = useLottie(
    {
      animationData: confettiAnimationJson,
      initialSegment: [0, 80],
      loop: false,
      autoplay: false,
    },
    {
      width: 500,
      height: 500,
      position: 'absolute',
    }
  );

  const handleOnMouseEnter = useCallback(() => {
    animationObj.goToAndPlay(0, true);
  }, [animationObj]);

  const handleOnMouseLeave = useCallback(() => {
    animationObj.goToAndStop(27, true);
  }, [animationObj]);

  useEffect(() => {
    animationObj.goToAndStop(27, true);
  }, [animationObj]);

  return (
    <section className="relative flex flex-col w-full min-h-[150px] items-center justify-center gap-2 p-4">
      <div className="w-[90%] relative flex flex-col items-center justify-center gap-2 bg-discord-gray-5 p-4 rounded-lg border-discord-gray-2 border-2 shadow-md">
        {animationObj.View}
        <h1 className="flex text-primary font-bold text-[2rem] items-center z-10 border-1 border-black">
          Seja bem vindo(a) ao meu Portfolio!
        </h1>
        <Image
          alt="memoji confetti"
          src="/assets/images/memoji-confetti.webp"
          width={100}
          height={100}
          className="z-10"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      </div>

      <p className="text-xs text-discord-gray-0">Este é o início deste servidor.</p>
      <DividerWithDate />
    </section>
  );
};

export default MainChannelHeader;
