import { DialogActions } from "@mui/material";
import Button from '@mui/material/Button';

interface ModalActionsProps {
  saveTextButton: string;
  closeTextButton: string;
  onSave: () => void;
  onClose: () => void;
}

export function ModalActions({ onSave, onClose, saveTextButton, closeTextButton }: ModalActionsProps) {
  return (
    <DialogActions>
      <Button onClick={onSave}>
        {closeTextButton}
      </Button>
      <Button variant='contained' autoFocus onClick={onSave}>
        {saveTextButton}
      </Button>
    </DialogActions>
  );
}