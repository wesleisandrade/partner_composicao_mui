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
      <Modal.Actions>
        <Modal.Button text={closeTextButton} onClick={handleClose} />
        <Modal.Button text={saveTextButton} onClick={handleSave} variant='contained' />
      </Modal.Actions>
    </Modal.Root>
  );
}