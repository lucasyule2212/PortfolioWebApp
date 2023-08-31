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
      <h1 className="text-3xl font-semibold text-discord-gray-0 rounded-md px-4">
        Tudo pronto para começar, <span className="text-discord-light-blue">#{guestUser.username}</span>!
      </h1>
      <p className="text-sm font-semibold text-discord-gray-0 text-center mt-2">
        Agora você já pode começar a navegar pelo app.
      </p>
      <p className="text-xl font-semibold text-discord-light-blue mt-2">Divirta-se!</p>
      <div className=" rounded-full bg-discord-gray-4  mt-4">{animationObj.View}</div>
    </div>
  );
};

export default ReadyToGoChildren;
