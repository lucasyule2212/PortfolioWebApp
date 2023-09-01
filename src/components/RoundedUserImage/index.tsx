import { useGuestUser } from '@/store/GuestUser';
import Avatar from 'boring-avatars';
import React from 'react';
import Image from 'next/image';

// import { Container } from './styles';
type RoundedUserImageProps = {
  isGuest?: boolean;
};
const RoundedUserImage: React.FC<RoundedUserImageProps> = ({ isGuest }) => {
  const { guestUser } = useGuestUser();
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full">
      {isGuest ? (
        <Avatar
          variant="beam"
          size="50px"
          name={guestUser.name !== '' ? guestUser.name : 'Discord'}
          colors={['#30182B', '#F0F1BC', '#60F0C0', '#FF360E', '#191F04']}
        />
      ) : (
        <Image
          className="scale-150"
          src={`/assets/images/yuleHeadSmile.png`}
          alt={'sticker yule smile'}
          width={200}
          height={200}
        />
      )}
    </div>
  );
};

export default RoundedUserImage;
