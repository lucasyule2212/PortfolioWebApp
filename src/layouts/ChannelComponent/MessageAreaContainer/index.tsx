import React from 'react';
import styles from './styles.module.css';

// import { Container } from './styles';
interface MessageAreaContainerProps {
  children: React.ReactNode;
}

const MessageAreaContainer: React.FC<MessageAreaContainerProps> = ({ children }: MessageAreaContainerProps) => {
  return (
    <div className={`flex relative w-full flex-col overflow-y-auto ${styles['custom-scroll']} mx-1 my-5`}>
      <div className="flex-1 pt-5">{children}</div>
    </div>
  );
};

export default MessageAreaContainer;
