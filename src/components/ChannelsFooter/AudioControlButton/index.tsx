import React, { ReactNode, useState } from 'react';

// import { Container } from './styles';
type AudioControlButtonProps = {
  mainIcon: ReactNode;
  disabledIcon: ReactNode;
};

const AudioControlButton: React.FC<AudioControlButtonProps> = ({ mainIcon, disabledIcon }: AudioControlButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div
      className={`flex w-fit hover:bg-[#4e5058]/60 hover:cursor-pointer rounded-sm p-1`}
      onClick={() => setIsDisabled(prev => !prev)}
    >
      {isDisabled ? disabledIcon : mainIcon}
    </div>
  );
};

export default AudioControlButton;
