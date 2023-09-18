import React, { ReactNode } from 'react';
import MessageInput from '@/components/MessageInput';
import DevTooltip from '@/components/DevTooltip';

// import { Container } from './styles';
type ChannelMessageAreaProps = {
  children: ReactNode;
};

const ChannelMessageArea: React.FC<ChannelMessageAreaProps> = ({ children }: ChannelMessageAreaProps) => {
  return (
    <div className={`flex flex-col-reverse col-span-4 relative`}>
      {/* IN DEVELOPMENT TOOLTIP */}
      <DevTooltip>
        <MessageInput />
      </DevTooltip>
      {children}
    </div>
  );
};

export default ChannelMessageArea;
