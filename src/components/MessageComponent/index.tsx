'use client';
import React, { memo, useState } from 'react';
import RoundedUserImage from '../RoundedUserImage';
import { format } from 'date-fns';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/react';
import MessageActions from './MessageActions';

// import { Container } from './styles';

interface MessageComponentProps {
  username: string;
  user_image_url?: string;
  content: string;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ username, content }: MessageComponentProps) => {
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

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex relative px-4 py-1 hover:bg-discord-gray-4 w-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? <MessageActions /> : ''}
      <RoundedUserImage />
      <div className="flex flex-col ml-3">
        <div className="flex gap-2">
          <p className="font-normal text-primary text-sm">{username}</p>
          <p className=" text-discord-gray-0 text-xs">{format(new Date(), 'dd/MM/yyyy HH:mm')}</p>
        </div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default memo(MessageComponent);
