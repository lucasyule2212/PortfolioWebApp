import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';

// import { Container } from './styles';

interface IIconButtonProps {
  icon: IconType;
  size?: number;
  handleClick?: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon: Icon, size, handleClick }: IIconButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Icon
      color={isHover ? '#cbd5e0' : '#949ba4'}
      cursor={'pointer'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
      size={size || 25}
    />
  );
};

export default IconButton;
