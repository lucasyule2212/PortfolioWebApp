import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';

// import { Container } from './styles';

interface IIconButtonProps {
  icon: IconType;
  size?: number;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon: Icon, size }: IIconButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Icon
      color={isHover ? '#cbd5e0' : '#949ba4'}
      cursor={'pointer'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      // onClick={() => {}}
      size={size || 25}
    />
  );
};

export default IconButton;
