import React from 'react';
import { Skeleton } from '../ui/skeleton';

// import { Container } from './styles';

const ChannelLoadingSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <div className="flex flex-col gap-2 w-full p-4">
        <Skeleton className="w-[80px] h-[80px] rounded-full bg-discord-gray-1" />
        <Skeleton className="w-full h-[30px] bg-discord-gray-1" />
        <Skeleton className="w-full h-[15px] bg-discord-gray-1" />
      </div>
      <div className="flex flex-col gap-2 w-full p-4">
        <div className="flex gap-1 items-center">
          <Skeleton className="w-[50px] h-[50px] rounded-full bg-discord-gray-1" />
          <Skeleton className="w-[50px] h-[15px] bg-discord-gray-1" />
        </div>
        <Skeleton className="w-full h-[20px] bg-discord-gray-1" />
        <Skeleton className="w-full h-[20px] bg-discord-gray-1" />
      </div>
      <div className="flex flex-col gap-2 w-full p-4">
        <div className="flex gap-1 items-center">
          <Skeleton className="w-[50px] h-[50px] rounded-full bg-discord-gray-1" />
          <Skeleton className="w-[50px] h-[15px] bg-discord-gray-1" />
        </div>
        <Skeleton className="w-full h-[20px] bg-discord-gray-1" />
        <Skeleton className="w-full h-[20px] bg-discord-gray-1" />
      </div>
    </div>
  );
};

export default ChannelLoadingSkeleton;
