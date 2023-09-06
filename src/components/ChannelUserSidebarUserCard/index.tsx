import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React, { useMemo, useState } from 'react';
import RoundedUserImage from '../RoundedUserImage';
import { FaCrown } from 'react-icons/fa';

// import { Container } from './styles';

interface IChannelUserSidebarUserCardProps {
  label: string;
  isServerOwner?: boolean;
}

const ChannelUserSidebarUserCard: React.FC<IChannelUserSidebarUserCardProps> = ({
  label,
  isServerOwner = false,
}: IChannelUserSidebarUserCardProps) => {
  const styles = cva('flex gap-2 p-1 items-center rounded-md cursor-pointer', {
    variants: {
      variant: {
        default: '',
        hover: 'bg-discord-gray-2 text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  });

  const [isHovered, setIsHovered] = useState(false);

  const variant = useMemo(() => {
    if (isHovered) {
      return 'hover';
    }

    return 'default';
  }, [isHovered]);

  return (
    <div
      className={cn(styles({ variant }))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <RoundedUserImage isGuest={!isServerOwner} />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 rounded-full border-[2px] border-discord-gray-4"></div>
      </div>
      <div className="flex items-center gap-1">
        <span className={`text-xs ${isHovered ? 'text-primary' : 'text-discord-gray-0'} font-semibold`}>{label}</span>
        {isServerOwner && <FaCrown className="text-yellow-500 text-xs" />}
      </div>
    </div>
  );
};

export default ChannelUserSidebarUserCard;
