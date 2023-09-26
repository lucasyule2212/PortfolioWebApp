/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useGuestUser } from '@/store/GuestUser';
import { Emoji } from '@emoji-mart/data';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';
interface MessageReactionProps {
  emoji: string;
  count: number;
  reactedBy: string[];
  handleAddReaction: (emoji: Emoji, isExistentReactionClick?: boolean) => void;
}

const MessageReaction: React.FC<MessageReactionProps> = ({
  emoji,
  count,
  reactedBy,
  handleAddReaction,
}: MessageReactionProps) => {
  const { t } = useTranslation();
  const { guestUser } = useGuestUser();
  const othersReactedIsPositive = reactedBy.length > 3;
  return (
    <HoverCard>
      <HoverCardTrigger
        className="flex gap-2 items-center border border-discord-gray-4 bg-discord-gray-3 
   rounded-md px-2 hover:cursor-pointer data-[isUserReacted=true]:border-blue-600
   data-[isUserReacted=true]:bg-blue-600 data-[isUserReacted]:bg-opacity-20
   "
        key={emoji}
        data-isUserReacted={reactedBy.includes(guestUser?.username as string)}
        onClick={() => handleAddReaction({ id: emoji } as Emoji, true)}
      >
        {/* @ts-ignore */}
        <em-emoji id={emoji} size="1rem" set="twitter" />
        <p className="text-primary text-sm">{count}</p>
      </HoverCardTrigger>
      <HoverCardContent className="flex bg-discord-gray-7 text-primary gap-3 items-center text-sm w-fit" side="top">
        {/* @ts-ignore */}
        <em-emoji id={emoji} size="2.2rem" set="twitter" />
        <div className="flex gap-1">
          {/* return max 3 elements */}
          {reactedBy.slice(0, 3).map((user, index) => (
            <p key={user}>{`${user}${index < 2 ? ',' : ''}`}</p>
          ))}{' '}
          {othersReactedIsPositive ? `  ${t('react_with_3')} ${reactedBy.length - 3} ` : ''}
          {reactedBy.length > 1 ? t('react_with_2') : t('react_with')} :{emoji}:
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MessageReaction;
