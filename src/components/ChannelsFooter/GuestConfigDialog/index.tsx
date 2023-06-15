import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import { BsGearFill } from 'react-icons/bs';

// import { Container } from './styles';

const GuestConfigDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className={`flex w-fit hover:bg-[#4e5058]/60  rounded-sm p-1`}>
        <BsGearFill size={18} className="text-discord-gray-0" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GuestConfigDialog;
