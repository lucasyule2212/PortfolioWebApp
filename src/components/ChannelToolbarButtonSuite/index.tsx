import React from 'react';
import { MdInbox } from 'react-icons/md';
import IconButton from '../IconButton';
import { IoMdHelpCircle, IoMdNotifications } from 'react-icons/io';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillPushpin } from 'react-icons/ai';
import { RiDiscussFill } from 'react-icons/ri';

import SearchInput from './SearchInput';

// import { Container } from './styles';

const ChannelToolbarButtonSuite: React.FC = () => {
  return (
    <div className="flex items-center gap-4 mr-2">
      <IconButton icon={RiDiscussFill} />
      <IconButton icon={IoMdNotifications} />
      <IconButton icon={AiFillPushpin} />
      <IconButton icon={FaUserFriends} />
      <SearchInput />
      <IconButton icon={MdInbox} />
      <IconButton icon={IoMdHelpCircle} />
    </div>
  );
};

export default ChannelToolbarButtonSuite;
