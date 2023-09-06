import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogOverlay,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';
interface RedirectConfirmationModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  redirectLink: string;
}

const RedirectConfirmationModal: React.FC<RedirectConfirmationModalProps> = ({
  isOpen,
  setIsOpen,
  redirectLink,
}: RedirectConfirmationModalProps) => {
  const { t } = useTranslation();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogOverlay className="backdrop-blur-none bg-black/60" />
      <DialogContent className="bg-discord-gray-6 border-discord-gray-7">
        <DialogHeader>
          <DialogTitle className="text-center text-discord-gray-0">{t('redirectConfirmationModal_title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-discord-gray-0 text-base">
          {t('redirectConfirmationModal_subtitle')}
          <h4 className="text-discord-medium-blue mb-4 font-semibold">{redirectLink}</h4>
          <strong>{t('redirectConfirmationModal_subtitle_2')}</strong>
        </DialogDescription>
        <DialogFooter>
          <Button variant="destructive" onClick={() => setIsOpen(false)}>
            <p>{t('button_cancel')}</p>
          </Button>
          <Button
            variant="confirm"
            onClick={() => {
              const link = document.createElement('a');
              link.href = redirectLink;
              link.target = '_blank';
              link.click();
              setIsOpen(false);
            }}
          >
            <p>{t('button_confirm')}</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RedirectConfirmationModal;
