import { useGuestUser } from '@/store/GuestUser';
import { useLottie } from 'lottie-react';
import React from 'react';
// import { Container } from './styles';
import rocket from '../../../../public/assets/animations/rocket.json';

const ReadyToGoChildren: React.FC = () => {
  const { guestUser } = useGuestUser();

  const animationObj = useLottie(
    {
      animationData: rocket,
      loop: true,
      autoplay: true,
    },
    {
      width: 200,
      height: 200,
      transform: 'rotate(40deg)',
    }
  );
  return (
    <div className="flex flex-col items-center  w-full h-full relative">
      <div className=" rounded-full bg-discord-gray-4 border-2 border-discord-gray-7 shadow-lg shadow-discord-gray-7">
        {animationObj.View}
      </div>
      <h1 className="absolute bottom-16 text-3xl font-semibold text-primary rounded-md px-4">
        Tudo pronto para começar, #{guestUser.username}!
      </h1>
    </div>
  );
};

export default ReadyToGoChildren;
