import Button from '@mui/material/Button';

interface ModalButtonProps {
  text: string;
  onClick: () => void;
  variant?: "text" | "contained" | "outlined"
}

export function ModalButton({ onClick, text, variant }: ModalButtonProps) {
  return (
    <Button variant={variant} autoFocus onClick={onClick}>
      {text}
    </Button>
  );
}