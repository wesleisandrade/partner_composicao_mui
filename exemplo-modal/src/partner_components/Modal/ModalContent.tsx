import { ReactNode } from 'react'
import { DialogContent } from "@mui/material";

interface ModalContentProps {
  children: ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
  return (
    <DialogContent dividers>
      {children}
    </DialogContent>
  );
}