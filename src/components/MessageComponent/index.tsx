/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import React, { memo, useCallback, useMemo, useState } from 'react';
import RoundedUserImage from '../RoundedUserImage';
import { format } from 'date-fns';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/react';
import MessageActions from './MessageActions';
import { Emoji } from '@emoji-mart/data';
import MessageReaction from './MessageReaction';
import { useGuestUser } from '@/store/GuestUser';

// import { Container } from './styles';

interface MessageComponentProps {
  username: string;
  user_image_url?: string;
  content: string;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ username, content }: MessageComponentProps) => {
  const { guestUser } = useGuestUser();
  const editor = useEditor({
    editable: false,
    editorProps: {
      attributes: {
        class: 'outline-none text-primary text-sm',
      },
    },
    content: `
    ${content}
      `,
    extensions: [StarterKit],
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isHoverBlocked, setIsHoverBlocked] = useState(false);
  const [messageReactions, setMessageReactions] = useState<
    {
      emoji: string;
      count: number;
      reactedBy: string[];
    }[]
  >([
    {
      emoji: 'grinning',
      count: 3,
      reactedBy: ['lucas_yule', 'test', 'test2'],
    },
  ]);
  const reactionUser = useMemo(() => {
    return guestUser?.username as string;
  }, [guestUser?.username]);

  const handleAddReaction = useCallback(
    (emoji: Emoji, isExistentReactionClick?: boolean) => {
      const reactionIndex = messageReactions.findIndex(reaction => reaction.emoji === emoji.id);
      if (reactionIndex === -1) {
        setMessageReactions([...messageReactions, { emoji: emoji.id, count: 1, reactedBy: [reactionUser] }]);
      } else {
        const newReactions = [...messageReactions];
        const reactionItem = newReactions[reactionIndex];
        if (reactionItem) {
          if (!reactionItem.reactedBy.includes(reactionUser)) {
            reactionItem.count += 1;
            reactionItem.reactedBy.push(reactionUser);
            setMessageReactions(newReactions);
          } else if (isExistentReactionClick) {
            const newCount = reactionItem.count - 1;
            if (newCount === 0) {
              newReactions.splice(reactionIndex, 1);
            } else {
              reactionItem.count = newCount;
              reactionItem.reactedBy = reactionItem.reactedBy.filter(user => user !== reactionUser);
            }
            setMessageReactions(newReactions);
          }
        }
      }
    },
    [messageReactions, reactionUser]
  );

  return (
    <div
      className="flex relative px-4 py-1 hover:bg-discord-gray-4 w-full data-[ishoverblocked=true]:bg-discord-gray-4"
      data-ishoverblocked={isHoverBlocked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(isHoverBlocked ? true : false)}
    >
      {isHovered ? (
        <MessageActions
          setIsMessageHoverBlocked={setIsHoverBlocked}
          isMessageHoverBlocked={isHoverBlocked}
          handleAddReaction={handleAddReaction}
        />
      ) : (
        ''
      )}
      <RoundedUserImage />
      <div className="flex flex-col ml-3">
        <div className="flex gap-2">
          <p className="font-normal text-primary text-sm">{username}</p>
          <p className=" text-discord-gray-0 text-xs">{format(new Date(), 'dd/MM/yyyy HH:mm')}</p>
        </div>
        <EditorContent editor={editor} />
        {messageReactions.length > 0 && (
          <div className="flex gap-2">
            {messageReactions.map(reaction => {
              return (
                <MessageReaction
                  key={reaction.emoji}
                  emoji={reaction.emoji}
                  count={reaction.count}
                  reactedBy={reaction.reactedBy}
                  handleAddReaction={handleAddReaction}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(MessageComponent);
