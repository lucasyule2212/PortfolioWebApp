import React from 'react';

// import { Container } from './styles';

const RoundedUserImage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
      <span className="text-2xl text-discord-white">?</span>
    </div>
  );
};

export default RoundedUserImage;
