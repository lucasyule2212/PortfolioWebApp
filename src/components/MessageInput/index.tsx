'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import clientRoutes from '@/utils/consts/clientRoutes';
import IconButton from '../IconButton';
import { AiFillPlusCircle } from 'react-icons/ai';
import styles from './styles.module.css';
import EmojiPickerComponent from '../EmojiPicker';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Emoji from '@tiptap-pro/extension-emoji';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const MessageInput: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const placeHolderWithChannel = useMemo(() => {
    const route = clientRoutes[router.pathname] || {
      titlePanel: '',
    };

    if (route.titlePanel) {
      return `${t('messageInput_placeholder')} #${t(route.titlePanel)}`;
    } else {
      return '';
    }
  }, [router.pathname, t]);

  const [rows, setRows] = useState(1);

  const isRowsBiggerThanOne = useMemo(() => {
    return rows > 1;
  }, [rows]);

  const markdownEditor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyEditorClass: 'is-editor-empty',
        placeholder: placeHolderWithChannel,
      }),
      Emoji.configure({
        enableEmoticons: true,
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: `outline-none`,
      },
    },
    onUpdate: ({ editor }) => {
      const { state } = editor;

      const { doc } = state;

      const { content } = doc;

      const { childCount } = content;

      setRows(childCount);
    },
  });

  useEffect(() => {
    if (markdownEditor !== null && placeHolderWithChannel !== '') {
      const extensions = markdownEditor.extensionManager?.extensions;

      if (extensions && extensions.length > 0) {
        const placeholderExtension = extensions.find(extension => extension.name === 'placeholder');
        if (placeholderExtension) {
          placeholderExtension.options['placeholder'] = placeHolderWithChannel;
          markdownEditor.view.dispatch(markdownEditor.state.tr);
        }
      }
    }
  }, [markdownEditor, placeHolderWithChannel]);

  const handleSelectEmojiEditor = useCallback(
    (emoji: string) => {
      markdownEditor?.chain().focus().setEmoji(emoji).run();
    },
    [markdownEditor]
  );

  return (
    <div className="flex px-4 pb-6 relative">
      <div
        className={`relative flex w-full ${
          isRowsBiggerThanOne ? 'pt-3' : 'items-center'
        } bg-discord-gray-2 rounded-md pl-4 pr-1 gap-2 overflow-y`}
      >
        <div className="flex w-full justify-between absolute left-0 top-3 px-3">
          <div>
            <IconButton icon={AiFillPlusCircle} size={24} />
          </div>
          {markdownEditor && <EmojiPickerComponent onSelectEmojiEditor={handleSelectEmojiEditor} />}
        </div>

        <div
          className={` bg-discord-gray-2 placeholder:text-zinc-500 pl-8 py-3 caret-discord-gray-0 text-zinc-300 
          max-h-[55vh] w-[95%] ${styles['custom-scroll']}`}
        >
          <EditorContent
            editor={markdownEditor}
            className={`max-h-[50vh] flex flex-col overflow-y-auto ${styles['custom-scroll']} `}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
