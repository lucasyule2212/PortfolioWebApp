import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';

// import { Container } from './styles';

type IIconButtonProps = {
  icon: IconType;
};

const IconButton: React.FC<IIconButtonProps> = ({ icon: Icon }: IIconButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Icon
      color={isHover ? '#cbd5e0' : '#949ba4'}
      cursor={'pointer'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      // onClick={() => {}}
      size={25}
    />
  );
};

export default IconButton;
