import React from 'react';
import styles from './styles.module.css';

// import { Container } from './styles';
interface MessageAreaContainerProps {
  children: React.ReactNode;
}

const MessageAreaContainer: React.FC<MessageAreaContainerProps> = ({ children }: MessageAreaContainerProps) => {
  return (
    <div className={`flex relative h-fit flex-col overflow-y-auto ${styles['custom-scroll']} mx-1 my-1`}>
      {children}
    </div>
  );
};

export default MessageAreaContainer;
