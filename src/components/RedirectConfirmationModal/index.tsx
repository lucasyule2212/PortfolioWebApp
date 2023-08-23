import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';

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
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      {/* <DialogOverlay /> */}
      <DialogContent className="bg-discord-gray-6 border-discord-gray-7">
        <DialogHeader>
          <DialogTitle className="text-center text-discord-gray-0">Você será redirecionado:</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-discord-gray-0 text-base">
          Ao confirmar, uma nova aba será aberta em:
          <h4 className="text-discord-medium-blue mb-4 font-semibold">{redirectLink}</h4>
          Deseja continuar?
        </DialogDescription>
        <DialogFooter>
          <Button variant="destructive" onClick={() => setIsOpen(false)}>
            <p>Cancelar</p>
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
            <p>Confirmar</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RedirectConfirmationModal;
