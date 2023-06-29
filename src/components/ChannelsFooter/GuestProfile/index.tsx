import RoundedUserImage from '@/components/RoundedUserImage';
import React from 'react';

// import { Container } from './styles';

const GuestProfile: React.FC = () => {
  return (
    <div className={`flex w-[50%] hover:bg-[#4e5058]/60  rounded-sm py-1 hover:cursor-pointer`}>
      <RoundedUserImage />
      <div className="flex flex-col justify-center ml-2">
        <span className="text-xs text-primary font-semibold">usuario</span>
        <span className="text-[0.7rem] text-discord-gray-0">usuario#22</span>
      </div>
    </div>
  );
};

export default GuestProfile;
