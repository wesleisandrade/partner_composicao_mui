import { ReactNode } from 'react';
import { Modal } from '../partner_components/Modal';


interface ModalMessageProps {
  open: boolean;
  handleClose: () => void;
  handleSave: () => void;
  title: string;
  saveTextButton: string;
  closeTextButton: string;
  modalContent: ReactNode;
}

export default function ModalMessage({ 
  open,
  title,
  saveTextButton,
  closeTextButton,
  modalContent,
  handleSave, 
  handleClose 
}: ModalMessageProps) {
  return (
    <Modal.Root open={open} handleClose={handleClose}>
      <Modal.Header title={title} onClose={handleClose} />
      <Modal.Content>
        {modalContent}
      </Modal.Content>
      <Modal.Actions 
        onSave={handleSave}
        onClose={handleClose}
        saveTextButton={saveTextButton}
        closeTextButton={closeTextButton}
      />
    </Modal.Root>
  );
}