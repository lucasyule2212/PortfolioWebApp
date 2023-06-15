import React from 'react';
import GuestProfile from './GuestProfile';
import AudioControlButton from './AudioControlButton';
import { IoMdMic, IoMdMicOff } from 'react-icons/io';
import { MdHeadset, MdHeadsetOff } from 'react-icons/md';
import GuestConfigDialog from './GuestConfigDialog';

// import { Container } from './styles';

const ChannelsFooter: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <GuestProfile />
      <div className="flex w-fit gap-1 items-center">
        <AudioControlButton
          mainIcon={<IoMdMic size={20} className="text-discord-gray-0" />}
          disabledIcon={<IoMdMicOff size={20} className="text-discord-gray-0 transform scale-x-[-1]" />}
        />
        <AudioControlButton
          mainIcon={<MdHeadset size={20} className="text-discord-gray-0" />}
          disabledIcon={<MdHeadsetOff size={20} className="text-discord-gray-0 transform scale-x-[-1]" />}
        />
        <GuestConfigDialog />
      </div>
    </div>
  );
};

export default ChannelsFooter;
