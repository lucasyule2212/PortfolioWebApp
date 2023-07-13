import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import clientRoutes from '@/utils/consts/clientRoutes';
import IconButton from '../IconButton';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Textarea } from '../ui/textarea';
import styles from './styles.module.css';
import EmojiPickerComponent from '../EmojiPicker';

// import { Container } from './styles';

const MessageInput: React.FC = () => {
  const router = useRouter();

  const placeHolderWithChannel = useMemo(() => {
    const route = clientRoutes[router.pathname];

    if (route?.titlePanel) {
      return `Conversar em #${route.titlePanel}`;
    } else {
      return '';
    }
  }, [router.pathname]);

  const [rows, setRows] = useState(1);

  const isRowsBiggerThanOne = useMemo(() => {
    return rows > 1;
  }, [rows]);

  return (
    <div className="flex px-4 pb-6 z-10 relative">
      <div
        className={`flex w-full ${
          isRowsBiggerThanOne ? 'pt-3' : 'items-center'
        } bg-discord-gray-2 rounded-md px-4 gap-2`}
      >
        <div>
          <IconButton icon={AiFillPlusCircle} size={24} />
        </div>
        <div className="relative flex-1">
          <Textarea
            className={`bg-discord-gray-2 placeholder:text-zinc-500 p-3 caret-discord-gray-0 text-zinc-300
          resize-none max-h-[50vh] ${styles['custom-scroll']}`}
            placeholder={placeHolderWithChannel}
            rows={rows}
            onChange={e => {
              const text = e.target.value;
              const rows = text.split('\n').length;

              setRows(rows);
            }}
          />
        </div>

        <EmojiPickerComponent />
      </div>
    </div>
  );
};

export default MessageInput;
